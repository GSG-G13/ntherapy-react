import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {
  TableRow, TableBody, TableCell, Grid, Typography, Button, Avatar, CircularProgress,
} from '@mui/material';
import { axiosInstance } from '../../../../utils/apis';

const BodyTable = ({ therapists, loading }: {therapists: [] | null, loading: boolean}) => (

  <TableBody sx={{ position: 'relative' }}>
    { loading
            && (
            <TableRow sx={{ position: 'absolute', top: '50%', left: '50%' }}>
              <CircularProgress />
            </TableRow>
            ) }
    {!loading && therapists?.map((therapist: any) => (
      <TableRow
        key={therapist.user.userId}
      >
        <TableCell component="th" scope="row">
          <Grid container alignItems="center">
            <Grid item>
              <Avatar alt="Remy Sharp" src={therapist.profileImg} />
            </Grid>
            <Grid item style={{ marginLeft: '10px' }}>
              <div>
                <Typography sx={{ fontWeight: 600 }} color="primary.dark">{therapist?.user?.fullName}</Typography>
                <Typography color="primary.main" sx={{ fontSize: '12px' }}>{therapist?.major}</Typography>
                <Typography color="primary.main" sx={{ fontSize: '12px' }}>
                  {therapist?.user?.email}

                </Typography>
              </div>
            </Grid>
          </Grid>
        </TableCell>
        <TableCell align="center">
          <Button variant="contained" href={therapist?.cvLink} target="blank">
            Download
            <FileDownloadIcon />
          </Button>
        </TableCell>
        <TableCell align="center">
          <Typography color="primary.main">{therapist?.user?.isActive ? 'Active' : 'In Active'}</Typography>
        </TableCell>
        <TableCell align="center" style={{ gap: '3px' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={async () => {
              await axiosInstance.patch('/therapists', {
                data: {
                  userId: therapist.user.userId,
                  active: !therapist.user.isActive,
                },
              });
            }}
          >
            Activate
          </Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>

);
export default BodyTable;
