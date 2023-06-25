import { useState } from 'react';
import { TableRow, TableCell, Checkbox } from '@mui/material';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { bodyCell } from './style';
import axiosInstance from '../../utils/apis/axios';
import { TRow } from './types';

dayjs.extend(utc);

const RowTable = ({ appointment }:TRow) => {
  const {
    isAvailable, isBooked, datetime, id,
  } = appointment;
  const [availability, setAvailability] = useState<boolean>(isAvailable);
  return (
    <TableRow sx={{ backgroundColor: availability ? 'white' : '#ffe766' }}>
      <TableCell sx={bodyCell}>
        {`${dayjs(datetime).utc(true).local()
          .format()
          .slice(5, 10)} | ${dayjs(datetime).utc(true).local()
          .format()
          .slice(12, -9)}`}
      </TableCell>
      <TableCell sx={bodyCell}>{isBooked ? 'BOOKED' : 'PENDING'}</TableCell>
      <TableCell sx={bodyCell}>{availability ? 'AVAILABLE' : 'CANCELED'}</TableCell>
      <TableCell sx={bodyCell}>
        <Checkbox
          disabled={isBooked}
          checked={!availability}
          onChange={async () => {
            setAvailability(!availability);
            await axiosInstance.put(`/appointments/${id}`);
          }}
        />
      </TableCell>
    </TableRow>

  );
};

export default RowTable;
