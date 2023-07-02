import {
  Container, Typography, Grid, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { online, online2, group } from '../../assets';

const OnlineMedical = () => (
  <>
    <Container>
      <Grid container spacing={2} mt={5}>
        <Grid item xs={6} sx={{ mt: 5 }}>
          <img src={online} alt="online" />
        </Grid>
        <Grid item xs={5} sx={{ mt: 5, ml: 5 }}>
          <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', mb: 2, mt: 3 }}>
            DISCOVER YOUR SELF
          </Typography>
          <Typography sx={{
            mb: 4, mt: 3, color: '#90AAB9', fontSize: 12,
          }}
          >
            JOIN US TO GET PROVIDED WITH THE TOOLS AND SUPPORT YOU NEED TO MANAGE
            YOUR MENTAL HEALTH AND LEAD A HEALTHIER
            MORE FULFILLING LIFE.
          </Typography>
          <Button variant="contained" sx={{ borderColor: 'primary.main' }}>
            <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
              SIGN UP
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Container>
    <Container>
      <Grid container spacing={2} mt={5}>

        <Grid item xs={6} sx={{ mt: 5, ml: 5 }}>
          <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', mb: 2, mt: 3 }}>
            BE ONE OF THE TEAM
          </Typography>
          <Typography sx={{
            mb: 4, mt: 3, color: '#90AAB9', fontSize: 12,
          }}
          >
            JOIN US AND INCREASE EFFICIENCY, IMPROVE COMMUNICATION,
            ENHANCED COLLABORATION, AND IT CAN ALSO HELP TO REDUCE COSTS,
            AND IMPROVE CLIENT SERVICE.
          </Typography>
          <Button variant="contained" sx={{ borderColor: 'primary.main' }}>
            <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
              JOIN US
            </Link>
          </Button>
        </Grid>
        <Grid item xs={5} sx={{ mt: 5 }}>
          <img src={online2} alt="online" />
        </Grid>
      </Grid>
    </Container>
    <Container style={{ backgroundColor: '#F4F7FF', height: '25rem' }}>
      <Grid container spacing={2} mt={5}>
        <Grid item xs={6}>
          <img src={group} alt="group" />
        </Grid>
        <Grid item xs={6} sx={{ mt: 5 }}>
          <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', mb: 2, mt: 5 }}>
            Come on
            <br />
            book your appointment
          </Typography>
          <Button variant="contained" sx={{ borderColor: 'primary.main' }}>
            <Link to="/therapists" style={{ textDecoration: 'none', color: 'white' }}>
              Discover our therapists
            </Link>
          </Button>
        </Grid>

      </Grid>
    </Container>
  </>
);

export default OnlineMedical;
