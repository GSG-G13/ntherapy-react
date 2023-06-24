import {
  Grid, Card, CardContent, CardMedia, Typography, CardActionArea,
  Button,
} from '@mui/material';
import classes from './classes';
import { TherapistCardProps } from './types';

const GridCard = ({ therapist }:TherapistCardProps) => (
  <Grid item xs={3} sx={{ marginTop: 5 }}>
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image={therapist.profileImg}
          alt={therapist.user.fullName}
          sx={{ marginBottom: '5px' }}
        />

        <CardContent sx={{ padding: 0 }}>
          <Typography gutterBottom component="div" sx={classes.DoctorName} color="primary.dark" margin="0">
            {therapist.user.fullName}
          </Typography>
          <Typography variant="body1" color="primary.dark" textAlign="center">
            {therapist.major.trim().length > 30 ? `${therapist.major.slice(0, 20)}...` : therapist.major }
          </Typography>
          <Typography variant="body1" color="primary.dark" textAlign="center" sx={{ fontWeight: '900' }}>
            {therapist.hourlyRate}
            /hr
          </Typography>
          <Button variant="contained" sx={classes.button}>View Profile</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
);

export default GridCard;
