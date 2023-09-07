import { Box, Grid, Typography } from '@mui/material'

export default function NoResultsCollection() {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Grid item xs={12} md={12} sx={{ margin: '0 auto' }}>
        <Box
          component="img"
          src="/assets/images/Vector.svg"
          sx={{ width: '28rem', height: '28rem', margin: '0 auto' }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ textAlign: 'center', marginTop: '2rem' }}>
          Search better. <br />
          There is nothing like this in your collection.{' '}
        </Typography>
      </Grid>
    </Grid>
  )
}
