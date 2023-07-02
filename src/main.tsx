import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@mui/material/styles';
import router from './routes';
import theme from './theme/theme.ts';
import AppContext from './context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <AppContext>
          <RouterProvider router={router} />
        </AppContext>

      </SnackbarProvider>

    </ThemeProvider>
  </React.StrictMode>,
);
