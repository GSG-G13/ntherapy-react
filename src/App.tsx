import { ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import router from './routes/index.tsx';
import { AuthContext } from './context/index.ts';
import CheckThemeProvider from './context/themeContext';
import './index.css';

const App = (): ReactElement => (
  <CheckThemeProvider>
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
  </CheckThemeProvider>

);

export default App;
