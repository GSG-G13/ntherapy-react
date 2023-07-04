import {
  Container, Typography, Grid, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { hero } from '../../assets';
import './style.css';

const HeroSection = () => (
  <div className="hersection">
    <Container>
      <Grid container spacing={2} mt={5}>
        <Grid item xs={12} md={6} lg={6} sx={{ mt: 5 }}>
          <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', mb: 2, mt: 5 }}>
            Talk to your therapist
            <br />
            privately anytime anywhere
          </Typography>
          <Typography sx={{
            mb: 4, mt: 5, color: '#90AAB9', fontSize: 15,
          }}
          >
            It gets much better from here. Get 1:1 help that
            <br />
            works, and lasts — from the best in online
            therapy and psychiatry.
          </Typography>
          <Button variant="contained" sx={{ borderColor: 'primary.main' }}>
            <Link to="/therapists" style={{ textDecoration: 'none', color: 'white' }}>
              Discover our therapists
            </Link>
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              marginBottom: '5rem',
            },
          }}
        >
          <img src={hero} alt="hero" style={{ maxWidth: '100%' }} />
        </Grid>
      </Grid>
    </Container>
  </div>

);

export default HeroSection;
