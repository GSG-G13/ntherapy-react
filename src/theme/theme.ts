import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#516EFF',
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

