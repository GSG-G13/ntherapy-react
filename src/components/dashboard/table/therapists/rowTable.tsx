import { useState } from 'react';
import {
  TableRow, TableCell, Grid, Typography, Button, Avatar,
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { enqueueSnackbar } from 'notistack';
import { axiosInstance } from '../../../../utils/apis';
import { Therapist } from './types';

const RowTable = ({ therapist }: {therapist: Therapist}) => {
  const [active, setActive] = useState<boolean>(therapist.user.isActive);
  const profileStateHandler = async () => {
    try {
      await axiosInstance.patch('/admin/therapists', {
        userId: therapist.userId,
        active: therapist?.user?.isActive ? 'false' : 'true',

      });
      setActive(!active);
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <TableRow
      key={therapist.userId}
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
        <Typography color="primary.main">{active ? 'Active' : 'In Active'}</Typography>
      </TableCell>
      <TableCell align="center" style={{ gap: '3px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={profileStateHandler}
        >
          Activate
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default RowTable;
