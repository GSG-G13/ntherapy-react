import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import {
  Alert,
  Table, TableRow, TableHead, TableBody,
  TableCell, TableContainer, Paper,
} from '@mui/material';
import axiosInstance from '../../utils/apis/axios';
import {
  headerCell, spinner, container,
} from './style';
import { Appointment, TAppointments } from './types';
import RowTable from './tableRow';

const AppointmentsTable = ({
  date, id, loading, loadingChange,
}: TAppointments) => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        loadingChange(true);
        const { data } = await axiosInstance(`/appointments/${id}?date=${date}`);
        setAppointments(data);
        loadingChange(false);
      } catch (e) {
        loadingChange(false);
      }
    })();
  }, [date, id, loadingChange]);
  return (
    <TableContainer
      component={Paper}
      sx={container}
    >
      <Table sx={{ minHeight: '400px' }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: '#516EFF' }}>
          <TableRow>
            <TableCell sx={headerCell}>
              time
            </TableCell>
            <TableCell sx={headerCell}>
              booked
            </TableCell>
            <TableCell sx={headerCell}>
              available
            </TableCell>
            <TableCell sx={headerCell}>
              unavailable
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ margin: '3px', position: 'relative' }}>
          { loading ? (
            <TableRow sx={spinner}>
              <ReactLoading
                className="spinner"
                type="spin"
                color="#ffe766"
                width="45px"
              />
            </TableRow>
          ) : (appointments.length
            ? appointments.map((appointment: Appointment) => (
              <RowTable
                key={appointment.id}
                appointment={appointment}
              />
            ))
            : (
              <TableRow sx={{
                position: 'absolute', left: '47%', top: '50%', transform: 'translate(-50px, -50px)',
              }}
              >
                <Alert severity="info">NO APPOINTMENTS</Alert>
              </TableRow>
            )) }
        </TableBody>
      </Table>

    </TableContainer>
  );
};

export default AppointmentsTable;