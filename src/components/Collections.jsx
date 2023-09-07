import { Box, Button, Grid, Typography } from '@mui/material'
import CollectionItem from './CollectionItem'
import { v4 as uuidv4 } from 'uuid'
import styled from '@emotion/styled'
import Size from '../svg/Size'
import Calendar from '../svg/Calendar'
import DollarSign from '../svg/DollarSign'

const StyledButton = styled(Button)`
  width: 124px;
  height: 24px;
  border: 1px solid black;
  border-radius: 12px;
  color: #191919;
  text-transform: none;
  font-style: normal;
  margin-left: 1rem;
  &.selected {
    background-color: #ef233c;
    color: #fff;
    border: none;
  }
`

export default function Collections({
  collection,
  filteredCollection,
  setFilteredCollection,
  inputValue,
  countResults,
  onSneakerSelect,
  setSortingMethod,
  sortingMethod,
}) {
  const sortCollectionByYear = () => {
    if (sortingMethod === 'year') {
      setFilteredCollection(collection)
      setSortingMethod(null)
    } else {
      setFilteredCollection([...collection].sort((a, b) => a.year - b.year))
      setSortingMethod('year')
    }
  }

  const sortCollectionBySize = () => {
    if (sortingMethod === 'size') {
      setFilteredCollection(collection)
      setSortingMethod(null)
    } else {
      setFilteredCollection([...collection].sort((a, b) => a.size - b.size))
      setSortingMethod('size')
    }
  }

  const sortCollectionByPrice = () => {
    if (sortingMethod === 'price') {
      setFilteredCollection(collection)
      setSortingMethod(null)
    } else {
      setFilteredCollection([...collection].sort((a, b) => a.price - b.price))
      setSortingMethod('price')
    }
  }

  return (
    <Box ml={5}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box p={4}>
          {inputValue ? (
            <Box mr={110} mb={4}>
              <Typography sx={{ fontSize: '1rem', width: '15rem' }}>
                Search results for
              </Typography>
              <Typography variant="h3">
                {inputValue} ({countResults})
              </Typography>
            </Box>
          ) : null}
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ fontSize: '1rem' }}>Sort by:</Typography>

            <StyledButton
              onClick={sortCollectionByYear}
              className={sortingMethod === 'year' ? 'selected' : ''}
            >
              <Calendar fill={sortingMethod === 'year' ? '#fff' : '#191919'} />
              <Typography sx={{ fontSize: '.7rem', ml: '.4rem' }}>
                Oldest year
              </Typography>
            </StyledButton>

            <StyledButton
              onClick={sortCollectionBySize}
              className={sortingMethod === 'size' ? 'selected' : ''}
            >
              <Size fill={sortingMethod === 'size' ? '#fff' : '#191919'} />
              <Typography sx={{ fontSize: '.7rem', ml: '.3rem' }}>
                Smallest size
              </Typography>
            </StyledButton>

            <StyledButton
              onClick={sortCollectionByPrice}
              className={sortingMethod === 'price' ? 'selected' : ''}
            >
              <DollarSign
                fill={sortingMethod === 'price' ? '#fff' : '#191919'}
              />
              <Typography sx={{ fontSize: '.7rem', ml: '.4rem' }}>
                Lowest price
              </Typography>
            </StyledButton>
          </Box>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {filteredCollection.map((sneaker) => (
            <Grid sx={{ padding: 0 }} item xs={1} sm={4} md={4} key={uuidv4()}>
              <CollectionItem sneaker={sneaker} onClick={onSneakerSelect} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
