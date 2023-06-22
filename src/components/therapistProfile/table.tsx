import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import {
  Table, Checkbox, TableRow, TableHead, TableBody,
  TableCell, TableContainer, Paper,
} from '@mui/material';
import axiosInstance from '../../utils/apis/axios';
import {
  headerCell, bodyCell, spinner, container,
} from './style';
import { Appointment, Props } from './types';

const AppointmentsTable = (props: Props) => {
  const { date, id } = props;
  const [appointments, setAppointments] = useState([]);
  const [ava, setAva] = useState(false);
  useEffect(() => {
    axiosInstance(`/appointments/${id}?date=${date}`)
      .then(({ data }) => {
        setAppointments(data);
      });
  }, [date, ava, id]);
  return (
    <TableContainer
      component={Paper}
      sx={container}
    >
      <Table sx={{ minHeight: '400px' }}>
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
              cancel
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ margin: '3px', position: 'relative' }}>
          {appointments.length ? appointments.map((appo: Appointment) => (
            <TableRow sx={{ backgroundColor: appo.isAvailable ? 'white' : '#ffe766' }} key={appo.id}>
              <TableCell sx={bodyCell}>
                {`${appo.datetime.slice(5, 10)} | ${appo.datetime.slice(12, -8)}` }
              </TableCell>
              <TableCell sx={bodyCell}>{appo.isBooked ? 'BOOKED' : 'PENDING'}</TableCell>
              <TableCell sx={bodyCell}>{appo.isAvailable ? 'AVAILABLE' : 'CANCLED'}</TableCell>
              <TableCell sx={bodyCell}>
                <Checkbox
                  disabled={!!appo.isBooked}
                  checked={!appo.isAvailable}
                  onChange={async () => {
                    const resp = await axiosInstance.put(`/appointments/${appo.id}`);
                    if (resp.status !== 400) { setAva(!ava); }
                  }}
                />
              </TableCell>
            </TableRow>
          )) : (
            <TableRow sx={spinner}>
              <ReactLoading
                className="spinner"
                type="spin"
                color="#ffe766"
                width="45px"
              />
            </TableRow>
          )}
        </TableBody>
      </Table>

    </TableContainer>
  );
};

export default AppointmentsTable;
