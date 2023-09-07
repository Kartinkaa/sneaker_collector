import { useNavigate } from 'react-router-dom'
import { Button, Grid, Typography } from '@mui/material'
import { ROUTES } from '../constans'
import styled from '@emotion/styled'

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

export default function Home() {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate(ROUTES.COLLECTION)
  }
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Grid
        item
        xs={12}
        md={8}
        component="img"
        src="/assets/images/Group.svg"
        sx={{ width: '757px', height: '791px', flexShrink: 0 }}
      />
      <Grid xs={12} md={3} item sx={{ width: '18rem', height: '40rem' }}>
        <Typography
          variant="h1"
          sx={{ fontFamily: 'Boxing', fontSize: '64px', margin: '5rem 0' }}
        >
          Welcome to a sneaker collector
        </Typography>
        <Typography>
          This tool not only lets you showcase your prized sneaker collection
          but also provides you with the tools to curate, organize, and
          catalogue your sneakers like never before.{' '}
        </Typography>
        <StyledButton onClick={handleButtonClick} variant="contained">
          <Typography>Start your new collection</Typography>
        </StyledButton>
      </Grid>
    </Grid>
  )
}
