import {
  Alert, Skeleton, Box, Grid, Container,
} from '@mui/material';
import { TherapistCardType, GridCard } from '..';
import { SkeletonBoxStyle } from './classes';

const TherapistList = ({
  therapists,
  loading,
}: {
  therapists: TherapistCardType[];
  loading: boolean;
}) => {
  if (loading) {
    const dataArray:{
      id: string;
    }[] = [...Array(8)].map((_, index) => ({
      id: `item-${index}`,
    }));
    return (
      <Grid container spacing={2}>
        {dataArray.map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={dataArray[index].id}>
            <br />
            <br />
            <Box
              sx={SkeletonBoxStyle}
            >
              <Skeleton variant="rectangular" width="100%" height={180} animation="wave" />
              <Box p={2}>
                <Skeleton variant="text" width="50%" height={20} animation="wave" />
                <Skeleton variant="text" width="70%" height={16} animation="wave" sx={{ mt: 1 }} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  }

  if (therapists.length === 0) {
    return (
      <Container style={{ height: '800px' }}>
        <Alert severity="info" sx={{ mt: 4 }}>
          No therapists found.
        </Alert>
        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/media/8b4662f8023e4e2295f865106b5d3aa7.gif" alt="empty" style={{ width: '50%', height: '50%' }} />
        </Container>
      </Container>
    );
  }

  return (
    <Grid container spacing={2} style={{ height: '800px' }}>
      {
      therapists.map((therapist: TherapistCardType) => (
        <GridCard therapist={therapist} key={therapist.userId} />
      ))
      }
    </Grid>
  );
};

export default TherapistList;
