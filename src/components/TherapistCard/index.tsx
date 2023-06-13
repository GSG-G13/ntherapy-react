import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import classes from './classes';

const GridCard = () => (
  <Grid item xs={3} sx={{ marginTop: 5 }}>
    <Card sx={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
          alt="green iguana"
          sx={{ marginBottom: '5px' }}
        />

        <CardContent sx={{ padding: 0 }}>
          <Typography gutterBottom component="div" sx={classes.Namedectour} color="primary.dark" margin="0">
            Dr.Yasser Abu Amro
          </Typography>
          <Typography variant="body1" color="primary.dark" textAlign="center">
            Neurology
          </Typography>
          <Typography variant="body1" color="primary.dark" textAlign="center" sx={{ fontWeight: '900' }}>
            90$ /hr
          </Typography>
          <Button variant="contained" sx={classes.button}>View Profile</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
);

export default GridCard;
