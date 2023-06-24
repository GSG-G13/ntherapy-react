import {
  Alert, Skeleton, Box, Grid,
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
    return (
      <Grid container spacing={2}>
        {[...Array(8)].map(() => (
          <Grid item xs={12} sm={6} md={4}>
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
      <Alert severity="info" sx={{ mt: 4 }}>
        No therapists found.
      </Alert>
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
