import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const base = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ccb99b',
    },
  },
});

const theme = responsiveFontSizes(base);

export default theme;
