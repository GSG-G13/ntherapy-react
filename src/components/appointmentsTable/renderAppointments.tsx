import { TableRow, Alert } from '@mui/material';
import { Appointment } from './types';
import RowTable from './tableRow';
import { message } from './style';

const renderAppointments = (appointments: never[]) => (appointments?.length
  ? appointments.map((appointment: Appointment) => (
    <RowTable
      key={appointment.id}
      appointment={appointment}
    />
  ))
  : (
    <TableRow sx={message}>
      <Alert severity="info">NO APPOINTMENTS</Alert>
    </TableRow>
  ));

export default renderAppointments;
