import {
  Container, Typography, Grid, Button,
} from '@mui/material';
import { Worldimg } from '../../assets';

const World = () => (
  <Container>
    <Grid container spacing={2} mt={5}>

      <Grid item xs={6} sx={{ mt: 5, ml: 5 }}>
        <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', mb: 2, mt: 3 }}>
          World-class providers.
          <br />
          Top-notch care.

        </Typography>
        <Typography sx={{
          mb: 4, mt: 3, color: '#90AAB9', fontSize: 12,
        }}
        >
          Connect with expert therapists & psychiatric providers
          <br />
          who put you first. Our nationwide network ensures you
          <br />
          receive the best of the best in mental health care.
        </Typography>
        <Button variant="contained" sx={{ borderColor: 'primary.main' }}>
          Book an appointment
        </Button>
      </Grid>
      <Grid item xs={5} sx={{ mt: 5 }}>
        <img src={Worldimg} alt="Worldimg" />
      </Grid>
    </Grid>
  </Container>
);

export default World;
