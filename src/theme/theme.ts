import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#516EFF',
      dark:'#1F2B6C'
    },
    secondary: {
      main: '#FFE766',
    },
  },
  typography: {
    fontFamily: [
      'Work Sans',
      '-apple-system',
    ].join(','),
  },
});

