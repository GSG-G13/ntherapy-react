import { Button, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../utils/apis';
import { formContainer, loginContainer } from './style';

const LoginAdmin = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [ErrorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      await axiosInstance.post('/admin/login', {
        data: {
          username,
          password,
        },

      });
      navigate('/admin');
    } catch (e: any) {
      setErrorMessage(e.message);
    }
  };
  return (
    <Container sx={formContainer}>
      <Box sx={{ width: '500px' }}>
        <img className="logo" src="https://thrivetherapyclinic.com/wp-content/uploads/2020/03/ThriveLogo-Horizontal-500.png" alt="logo" />
      </Box>
      <Box sx={loginContainer}>
        <TextField
          sx={{ width: '90%', margin: 'auto' }}
          onClick={() => setErrorMessage('')}
          onChange={(e) => setUsername(e.target.value)}
          id="outlined-password-input"
          label="User"
          type="user"
          autoComplete="current-password"
        />
        <TextField
          sx={{ width: '90%', margin: 'auto', color: ErrorMessage ? 'red' : '' }}
          onClick={() => setErrorMessage('')}
          onChange={(e) => setPassword(e.target.value)}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          helperText={ErrorMessage.toUpperCase()}
        />
        <Button
          disabled={!(username && password)}
          sx={{ width: '90%', padding: '15px', margin: 'auto' }}
          onClick={loginHandler}
          variant="contained"
        >
          login
        </Button>
      </Box>

    </Container>
  );
};
export default LoginAdmin;
