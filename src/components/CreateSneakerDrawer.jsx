import {
  Box,
  Button,
  Drawer,
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material'
import styled from '@emotion/styled'
import { Controller, useForm } from 'react-hook-form'
import { addSneaker, getCollection } from '../api'

const StyledButton = styled(Button)`
  margin: 2rem 0;
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

const defaultValue = {
  name: '',
  brand: '',
  price: '',
  size: '',
  year: '',
}

export default function CreateSneakerDrawer({
  isOpen,
  onClose,
  setCollection,
  setFilteredCollection,
  clearFilters,
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: defaultValue,
  })

  const handleSubmitForm = (data) => {
    addSneaker(data)
      .then(() => {
        clearFilters()
        reset()
        onClose()

        getCollection()
          .then((newCollection) => {
            setCollection(newCollection)
            setFilteredCollection(newCollection)
          })
          .catch((error) => {
            alert('Error:', error)
          })
      })
      .catch((error) => {
        alert('Error:', error)
      })
  }

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box
        onSubmit={handleSubmit(handleSubmitForm)}
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
          <Typography variant="h2">Add sneakers to your collection</Typography>

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
          <FormLabel required htmlFor="bootstrap-input">
            Name
          </FormLabel>
          <Controller
            control={control}
            name="name"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                type="text"
                {...field}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />

          {errors?.name && <FormHelperText>{}</FormHelperText>}
        </FormControl>

        <FormControl variant="standard" sx={{ marginTop: '1rem' }}>
          <FormLabel required htmlFor="bootstrap-input">
            Brand
          </FormLabel>
          <Controller
            control={control}
            name="brand"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                type="text"
                {...field}
                error={!!errors.brand}
                helperText={errors.brand?.message}
              />
            )}
          />
        </FormControl>

        <FormControl variant="standard" sx={{ marginTop: '1rem' }}>
          <FormLabel required htmlFor="bootstrap-input">
            Price
          </FormLabel>
          <Controller
            control={control}
            name="price"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                type="text"
                {...field}
                error={!!errors.price}
                helperText={errors.price?.message}
              />
            )}
          />
        </FormControl>

        <FormControl variant="standard" sx={{ marginTop: '1rem' }}>
          <FormLabel required htmlFor="bootstrap-input">
            Size US
          </FormLabel>
          <Controller
            control={control}
            name="size"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                type="text"
                {...field}
                error={!!errors.size}
                helperText={errors.size?.message}
              />
            )}
          />
        </FormControl>

        <FormControl variant="standard" sx={{ marginTop: '1rem' }}>
          <FormLabel required htmlFor="bootstrap-input">
            Year
          </FormLabel>
          <Controller
            control={control}
            name="year"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                type="text"
                {...field}
                error={!!errors.year}
                helperText={errors.year?.message}
              />
            )}
          />
        </FormControl>

        <StyledButton
          type="submit"
          sx={{
            color: 'white',
          }}
        >
          <Box component="img" src="/assets/images/plus.svg" />
          Add new sneakers
        </StyledButton>
      </Box>
    </Drawer>
  )
}
