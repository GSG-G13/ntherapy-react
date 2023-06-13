import { Container, InputBase, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import GridCard from '../../components/TherapistCard';

const Therapist = () => (
  <>
    <Container>Therapist Page</Container>
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Grid item xs={6} md={8} style={{ marginTop: '20px' }}>
          <InputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton aria-label="search">
            <SearchIcon />
          </IconButton>
        </Grid>
      </Container>
    </Box>
    <Container>
      <Grid container>
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
      </Grid>
    </Container>
  </>
);

export default Therapist;
