import React from 'react'
import styled from '@emotion/styled'
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import NoResultsCollection from '../components/NoResultsCollection'
import EmptyCollection from '../components/EmptyCollection'
import Collections from '../components/Collections'
import CreateSneakerDrawer from '../components/CreateSneakerDrawer'
import SneakerDetailDrawer from '../components/SneakerDetailDrawer'
import { getCollection } from '../api'

const StyledButton = styled(Button)`
  margin: 2rem 0;
  width: 254px;
  color: #fff;
  background: #191919;
  font-family: 'Excon', sans-serif;
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  text-transform: none;
  &:hover {
    background-color: grey;
    color: white;
  }
`

export default function Collection() {
  const [collection, setCollection] = React.useState([])
  const [filteredCollection, setFilteredCollection] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [inputValue, setInputValue] = React.useState('')
  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = React.useState(false)
  const [selectedSneaker, setSelectedSneaker] = React.useState(null)
  const [sortingMethod, setSortingMethod] = React.useState(null)

  const handleSneakerSelect = (id) => {
    setSelectedSneaker(collection.find((item) => item._id === id))
  }

  const toggleCreateDrawer = () => {
    setIsCreateDrawerOpen(!isCreateDrawerOpen)
  }

  const handleInputChange = (event) => {
    const value = event.target.value
    setInputValue(value)
    const filteredData = collection.filter((item) => item.name.includes(value))
    setFilteredCollection(filteredData)
  }

  const clearFilters = () => {
    setInputValue('')
    setSortingMethod(null)
  }

  React.useEffect(() => {
    setIsLoading(true)
    getCollection()
      .then((data) => {
        setCollection(data)
        setFilteredCollection(data)
        setIsLoading(false)
      })
      .catch((e) => {
        console.log(e)
        setIsLoading(false)
      })
  }, [])

  return (
    <Box>
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '3rem',
        }}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Typography
            variant="h1"
            sx={{ fontFamily: 'Boxing', fontSize: '64px' }}
          >
            Your collection
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              value={inputValue}
              onChange={handleInputChange}
              sx={{
                width: '254px',
                background: '#EEEFF0',
                marginRight: '3rem',
              }}
              InputProps={{
                startAdornment: (
                  <Box component="img" src="/assets/images/search.svg" mr={1} />
                ),
              }}
              size="small"
              placeholder="Search"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <StyledButton onClick={toggleCreateDrawer}>
            <Box component="img" src="/assets/images/plus.svg" />
            Add new sneakers
          </StyledButton>
        </Grid>
      </Grid>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {filteredCollection.length ? (
            <Collections
              collection={collection}
              filteredCollection={filteredCollection}
              setFilteredCollection={setFilteredCollection}
              inputValue={inputValue}
              countResults={filteredCollection.length}
              onSneakerSelect={handleSneakerSelect}
              sortingMethod={sortingMethod}
              setSortingMethod={setSortingMethod}
            />
          ) : (
            <>{!inputValue ? <EmptyCollection /> : <NoResultsCollection />}</>
          )}
        </>
      )}

      {isCreateDrawerOpen && (
        <CreateSneakerDrawer
          isOpen={isCreateDrawerOpen}
          onClose={toggleCreateDrawer}
          setCollection={setCollection}
          setFilteredCollection={setFilteredCollection}
          clearFilters={clearFilters}
        />
      )}
      {!!selectedSneaker && (
        <SneakerDetailDrawer
          isOpen={!!selectedSneaker}
          onClose={() => setSelectedSneaker(null)}
          sneaker={selectedSneaker}
          setCollection={setCollection}
          setFilteredCollection={setFilteredCollection}
          clearFilters={clearFilters}
        />
      )}
    </Box>
  )
}
