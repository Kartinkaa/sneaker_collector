import styled from '@emotion/styled'
import {
  Box,
  Button,
  Drawer,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material'
import { getCollection, removeSneaker } from '../api'

const StyledSaveButton = styled(Button)`
  margin: 1rem 0;
  color: #808080;
  background: #ccc;
  font-family: 'Excon', sans-serif;
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  text-transform: none;
`
const StyledDeleteButton = styled(Button)`
  color: white;
  background: #ef233c;
  font-family: 'Excon', sans-serif;
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  text-transform: none;
  &:hover {
    background-color: red;
    color: white;
  }
`

export default function SneakerDetailDrawer({
  isOpen,
  onClose,
  sneaker,
  setCollection,
  setFilteredCollection,
  clearFilters,
}) {
  const removeSneakerFromCollection = (id) => {
    removeSneaker(id)
      .then(() => {
        clearFilters()
        onClose()
        getCollection()
          .then((data) => {
            setCollection(data)
            setFilteredCollection(data)
          })
          .catch((e) => {
            console.log(e)
          })
      })
      .catch((error) => {
        console.error('Error:', error)
        alert('Failed to remove sneaker. Please try again.')
      })
  }
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box
        component="form"
        sx={{
          width: 400,
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
        role="presentation"
        open={isOpen}
        onClose={onClose}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h2">{sneaker.name}</Typography>

          <Button sx={{ width: '2rem', height: '2rem' }}>
            <Box
              component="img"
              src="/assets/images/close.svg"
              sx={{ width: '2rem', height: '2rem' }}
              onClick={onClose}
            />
          </Button>
        </Box>

        <FormControl variant="standard" sx={{ marginTop: '3rem' }}>
          <FormLabel htmlFor="bootstrap-input">Name</FormLabel>
          <TextField
            defaultValue={sneaker.name}
            disabled
            fullWidth
            size="small"
            type="text"
          />
        </FormControl>

        <FormControl variant="standard" sx={{ marginTop: '1rem' }}>
          <FormLabel htmlFor="bootstrap-input">Brand</FormLabel>
          <TextField
            defaultValue={sneaker.brand}
            disabled
            fullWidth
            size="small"
            type="text"
          />
        </FormControl>

        <FormControl variant="standard" sx={{ marginTop: '1rem' }}>
          <FormLabel htmlFor="bootstrap-input">Price</FormLabel>
          <TextField
            defaultValue={sneaker.price}
            disabled
            fullWidth
            size="small"
            type="text"
          />
        </FormControl>

        <FormControl variant="standard" sx={{ marginTop: '1rem' }}>
          <FormLabel htmlFor="bootstrap-input">Size US</FormLabel>
          <TextField
            defaultValue={sneaker.size}
            disabled
            fullWidth
            size="small"
            type="text"
          />
        </FormControl>

        <FormControl variant="standard" sx={{ marginTop: '1rem' }}>
          <FormLabel htmlFor="bootstrap-input">Year</FormLabel>
          <TextField
            defaultValue={sneaker.year}
            disabled
            fullWidth
            size="small"
            type="text"
          />
        </FormControl>

        <Box mt={4} sx={{ display: 'flex', flexDirection: 'column' }}>
          <StyledSaveButton disabled>Save</StyledSaveButton>
          <StyledDeleteButton
            onClick={() => {
              removeSneakerFromCollection(sneaker._id)
            }}
          >
            <Box
              component="img"
              src="/assets/images/trash_white.svg"
              sx={{ width: '1rem', height: '1rem', marginRight: '1rem' }}
            />
            Delete
          </StyledDeleteButton>
        </Box>
      </Box>
    </Drawer>
  )
}
