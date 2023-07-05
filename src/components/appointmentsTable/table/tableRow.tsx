import { useState } from 'react';
import { TableRow, TableCell, Checkbox } from '@mui/material';
import dayjs from 'dayjs';
import { useSnackbar, VariantType } from 'notistack';
import { bodyCell } from './style';
import axiosInstance from '../../../utils/apis/axios';
import { TRow } from './types';

const RowTable = ({ appointment }:TRow) => {
  const { enqueueSnackbar } = useSnackbar();
  const showSnackbar = (message:string, severity:VariantType) => {
    enqueueSnackbar(message, { variant: severity });
  };
  const {
    isAvailable, isBooked, datetime, id,
  } = appointment;
  console.log(id);
  const [availability, setAvailability] = useState<boolean>(isAvailable);
  const availabilityHandler = async () => {
    try {
      await axiosInstance.put(`/appointments/${id}`);
      setAvailability(!availability);
    } catch (error) {
      showSnackbar('Something went wrong', 'error');
    }
  };
  return (
    <TableRow sx={{ backgroundColor: availability ? 'white' : '#ffe766' }}>
      <TableCell sx={bodyCell}>
        {
        `${dayjs(datetime).format('lll')}`
}
      </TableCell>
      <TableCell sx={bodyCell}>{isBooked ? 'BOOKED' : 'PENDING'}</TableCell>
      <TableCell sx={bodyCell}>{availability ? 'AVAILABLE' : 'CANCELED'}</TableCell>
      <TableCell sx={bodyCell}>
        <Checkbox
          disabled={isBooked}
          checked={!availability}
          onChange={availabilityHandler}
        />
      </TableCell>
    </TableRow>

  );
};

export default RowTable;
