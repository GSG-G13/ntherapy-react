import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useSnackbar, VariantType } from 'notistack';

import {
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import validationSchema from './schema';
import imageSrc from '../../assets/loginImg.jpg';
import {
  boxStyle,
  textFieldStyle,
  buttonStyle,
  gridStyle,
} from './classes';
import './style.css';
import axiosInstance from '../../utils/apis/axios';

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const showSnackbar = (message:string, severity:VariantType) => {
    enqueueSnackbar(message, { variant: severity });
  };
  const formik = useFormik({
    initialValues: {
      email: 'yasser@example.com',
      password: '123456789',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axiosInstance.post('/auth/login', {
          email: values.email,
          password: values.password,
        });
        localStorage.setItem('access_token', response.data.access_token);
      } catch (error) {
        showSnackbar('error', 'error');
      }
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Grid container component="main" sx={gridStyle}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{ height: 'fit-content', width: 'fit-content', overflow: 'hidden' }}
      >
        <img src={imageSrc} alt="login" className="imageLogin" />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
        style={{ height: '100vh', overflow: 'auto', overflowX: 'hidden' }}
      >
        <Box sx={boxStyle}>
          <Typography component="h1" variant="h5" sx={{ ml: 5, fontSize: '30px' }}>
            Hello, Again
          </Typography>
          <Box component="form" noValidate sx={{ mt: 5 }} onSubmit={formik.handleSubmit}>
            <TextField
              margin="normal"
              required
              sx={textFieldStyle}
              id="email"
              name="email"
              label="Email"
              autoFocus
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              required
              autoFocus
              sx={textFieldStyle}
              id="password"
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" variant="contained" fullWidth sx={buttonStyle}>
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signup" style={{ margin: '80px' }}>
                  Do not have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
