import {
  Container, Typography, Grid, Button,
} from '@mui/material';
import { backehero, hero } from '../../assets';

const HeroSection = () => (
  <div style={{ backgroundColor: '#F4F7FF', height: '29rem' }}>
    <Container>
      <Grid container spacing={2} mt={5}>
        <Grid item xs={12} md={6} lg={6} sx={{ mt: 5 }}>
          <Typography
            variant="h5"
            color="primary"
            sx={{
              mb: 4, mt: 5, color: '#90AAB9', fontSize: 12,
            }}
          >
            Talk to your therapist
            <br />
            privately anytime anywhere
          </Typography>
          <Typography sx={{
            mb: 4, mt: 5, color: '#90AAB9', fontSize: 12,
          }}
          >
            It gets much better from here. Get 1:1 help that
            <br />
            works, and lasts — from the best in online
            therapy and psychiatry.
          </Typography>
          <Button variant="contained" sx={{ borderColor: 'primary.main' }}>
            Discover our therapists
          </Button>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <div style={{ position: 'relative' }}>
            <img src={backehero} alt="hero" style={{ position: 'absolute', top: '8px', left: '-12px' }} />
            <img src={hero} alt="hero" style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>
        </Grid>
      </Grid>

    </Container>
  </div>
);

export default HeroSection;
