import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

const BodyTable = () => (
  <TableBody>
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <Grid container alignItems="center">
          <Grid item>
            <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000" />
          </Grid>
          <Grid item style={{ marginLeft: '10px' }}>
            <div>
              <Typography sx={{ fontWeight: 600 }} color="primary.dark">Raghda N. Abu Rizq</Typography>
              <Typography color="primary.main" sx={{fontSize:"12px"}}>123365789</Typography>
              <Typography color="primary.main" sx={{fontSize:"12px"}}>lorem lorem</Typography>
            </div>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell align="center">
        <Button variant="contained">
          Download
          <FileDownloadIcon />
        </Button>
      </TableCell>
      <TableCell align="center">
        <Typography color="primary.main">Pending</Typography>
      </TableCell>
      <TableCell align="center" style={{ gap: '3px' }}>
        <Button variant="contained" color="error" style={{ marginRight: '5px' }}>Decline</Button>
        <Button variant="contained" color="primary">Approve</Button>
      </TableCell>
    </TableRow>
  </TableBody>
);

export default BodyTable;
