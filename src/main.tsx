import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@mui/material/styles';
import router from './routes';
import theme from './theme/theme.ts';
import { AuthContext } from './context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={
        { vertical: 'top', horizontal: 'right' }
      }
      >
        <AuthContext>
          <RouterProvider router={router} />
        </AuthContext>

      </SnackbarProvider>

    </ThemeProvider>
  </React.StrictMode>,
);
