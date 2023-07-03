import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@mui/material/styles';
import router from './routes';
import theme from './theme/theme.ts';
import UserContext from './context/authContext .tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <UserContext>
          <RouterProvider router={router} />
        </UserContext>

      </SnackbarProvider>

    </ThemeProvider>
  </React.StrictMode>,
);
