import React, { useState } from 'react';
import {
  Button, CssBaseline, TextField, Paper, Box, Grid, Typography, RadioGroup, FormControlLabel, Radio,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import validationSchema from './schema';
import imageSrc from '../../assets/loginImg.jpg';
import {
  boxStyle, textFieldStyle, buttonStyle, gridStyle, imageStyle, fileUploadStyle,
} from './classes';
import './style.css';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const handleFileUpload = (_event:React.ChangeEvent<HTMLInputElement>) => {
  // eslint-disable-next-line no-console
  console.log('File uploaded successfully.');
};
const Signup = () => {
  const [userType, setUserType] = useState('');
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const handleUserTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserType(event.target.value);
    setShowAdditionalFields(event.target.value === 'therapist');
  };

  const formik = useFormik({
    initialValues: {
      username: 'yasser',
      email: 'yasser@example.com',
      password: '123456789',
      confirmPassword: '123456789',
      major: 'Psychology',
      hourlyRate: '100',
    },
    validationSchema,
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Grid container component="main" sx={gridStyle}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
      >
        <img src={imageSrc} alt="login" className="imageLogin" style={imageStyle} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
      >
        <Box sx={boxStyle}>

          <Typography component="h1" variant="h5" sx={{ ml: 5, fontSize: '30px' }}>
            Join us
          </Typography>
          <Box component="form" noValidate sx={{ mt: 5 }} onSubmit={formik.handleSubmit}>
            <RadioGroup
              style={{
                display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
              }}
              aria-label="userType"
              name="userType"
              value={userType}
              onChange={handleUserTypeChange}
              row
            >
              <FormControlLabel
                style={{ margin: '10px' }}
                value="therapist"
                control={<Radio />}
                label="therapist"
                labelPlacement="end"
              />
              <FormControlLabel
                style={{ margin: '10px' }}
                value="patient"
                control={<Radio />}
                label="patient"
                labelPlacement="end"
              />
            </RadioGroup>
            <TextField
              margin="normal"
              required
              sx={textFieldStyle}
              id="username"
              name="username"
              label="username"
              autoFocus
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
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
              type="password"
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              margin="normal"
              required
              autoFocus
              sx={textFieldStyle}
              id="confirmPassword"
              name="confirmPassword"
              label="confirmPassword"
              type="confirmPassword"
              onChange={formik.handleChange}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            />
            {showAdditionalFields && (
              <>
                <TextField
                  margin="normal"
                  required
                  autoFocus
                  sx={textFieldStyle}
                  id="major"
                  name="major"
                  label="major"
                  type="major"
                  onChange={formik.handleChange}
                  error={formik.touched.major && Boolean(formik.errors.major)}
                  helperText={formik.touched.major && formik.errors.major}
                />
                <TextField
                  margin="normal"
                  required
                  autoFocus
                  sx={textFieldStyle}
                  id="hourlyRate"
                  name="hourlyRate"
                  label="hourlyRate"
                  type="hourlyRate"
                  onChange={formik.handleChange}
                  error={formik.touched.hourlyRate && Boolean(formik.errors.hourlyRate)}
                  helperText={formik.touched.hourlyRate && formik.errors.hourlyRate}
                />

                <label htmlFor="file-upload">

                  <input
                    accept=".pdf"
                    id="file-upload"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleFileUpload}
                  />
                  <Button variant="contained" component="span" style={fileUploadStyle}>
                    Upload CV
                  </Button>
                </label>

                <label htmlFor="img-upload">
                  <input
                    accept="image/*"
                    id="img-upload"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleFileUpload}
                  />
                  <Button variant="contained" component="span" style={fileUploadStyle}>
                    Upload Image
                  </Button>
                </label>

              </>
            )}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={buttonStyle}
            >
              Join us
            </Button>
            <Grid container>

              <Grid item>
                <Link to="/login" style={{ margin: '80px' }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
