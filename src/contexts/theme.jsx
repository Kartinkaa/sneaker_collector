import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material'
import BoxingRegular from '../fonts/Boxing-Regular.otf'
import ExconRegular from '../fonts/Excon-Regular.otf'
import ExconBold from '../fonts/Excon-Bold.otf'
import ExconMedium from '../fonts/Excon-Medium.otf'

const theme = createTheme({
  palette: {
    background: {
      default: '#E0E0E0',
    },
  },
  typography: {
    fontFamily: ExconMedium,
    fontSize: 14,
    color: '#191919',
    h1: {
      fontFamily: BoxingRegular,
      fontWeight: 400,
      fontSize: '64px',
    },
    h2: {
      fontFamily: BoxingRegular,
      fontSize: '36px',
      fontWeight: 400,
    },
    h3: {
      fontFamily: BoxingRegular,
      fontWeight: 700,
      fontSize: 18,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Boxing';
          font-style: normal;
          font-weight: 400;
          src: local('Boxing'), local('Boxing-Regular'), url(${BoxingRegular}) format('otf');
        }

        @font-face {
          font-family: 'Excon';
          font-style: normal;
          font-weight: 400;
          src: local('Boxing'), local('Boxing-Regular'), 
                url(${ExconRegular}) format('otf'),
                url(${ExconMedium}) format('otf'),
                url(${ExconBold}) format('otf');
        }
      `,
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#FFF',
          borderRadius: '12px',
        },
      },
    },
  },
})

export default function ThemeProvider({ children }) {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}
