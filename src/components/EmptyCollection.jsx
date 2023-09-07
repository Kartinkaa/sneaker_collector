import { Box, Grid, Typography } from '@mui/material'

export default function EmptyCollection() {
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
          src="/assets/images/streamline-icon-hot-trending-2@140x140 1.svg"
          sx={{ maxWidth: '45rem', height: '35rem', margin: '0 auto' }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ textAlign: 'center' }}>
          Seem’s like you still didn’t add <br />
          any new sneaker to your collection
        </Typography>
      </Grid>
    </Grid>
  )
}
