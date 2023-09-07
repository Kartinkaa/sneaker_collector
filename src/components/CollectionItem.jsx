import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from '@mui/material'

export default function CollectionItem({ sneaker, onClick }) {
  return (
    <Box m={3} sx={{ flexGrow: 1, display: 'flex' }}>
      <Card sx={{ width: '22rem' }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h3">{sneaker.name}</Typography>

            <Button sx={{ minWidth: 0 }} onClick={() => onClick(sneaker._id)}>
              <Box component="img" src="/assets/images/trash.svg" />
            </Button>
          </Box>
          <Typography sx={{ margin: '1rem 0' }}>{sneaker.brand}</Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'start',
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 'bold' }}>
                {sneaker.year}
              </Typography>
              <Typography>Year</Typography>
            </Box>

            <Divider orientation="vertical" flexItem />

            <Box>
              <Typography sx={{ fontWeight: 'bold' }}>
                {sneaker.size}
              </Typography>
              <Typography>Size</Typography>
            </Box>

            <Divider orientation="vertical" flexItem />

            <Box>
              <Typography sx={{ fontWeight: 'bold' }}>
                ${sneaker.price}
              </Typography>
              <Typography>Price</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
