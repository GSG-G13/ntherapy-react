import { Button, CssBaseline, TextField, Paper, Box, Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import validationSchema from "./validationSchema";

const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: 'yasser@example.com',
      password: '123456789',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: 'url(https://cdn.discordapp.com/attachments/1113720748025073674/1117724543499370516/pexels-shvets-production-7176036.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
          }}
        />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              mr: 20,
              mt:20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
           
          <Typography component="h1" variant="h5"  sx={{ ml: 5, fontSize: '30px' }}>
              Hello, Again
            </Typography>
            <Box component="form" noValidate sx={{ mt: 5 }} onSubmit={formik.handleSubmit}>
              <TextField
                margin="normal"
                required
              sx={{ width: "120%", display: "flex" }}
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
              sx={{ width: "120%"}}
                id="password"
                name="password"
                label="Password"
                type="password"
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{width:"120%",mt:2,mb:2}}
               
              >
                Sign In
              </Button>
              <Grid container>

                <Grid item>
                  <Link to={"/signup"} style={{ marginLeft: "80px" }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}

export default Login