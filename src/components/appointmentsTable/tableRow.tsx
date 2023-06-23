import { useState } from 'react';
import { TableRow, TableCell, Checkbox } from '@mui/material';
import { bodyCell } from './style';
import axiosInstance from '../../utils/apis/axios';
import { TRow } from './types';

const RowTable = ({ appo }:TRow) => {
  const {
    isAvailable, isBooked, datetime, id,
  } = appo;
  const [ava, setAva] = useState<boolean>(isAvailable);
  return (
    <TableRow sx={{ backgroundColor: ava ? 'white' : '#ffe766' }}>
      <TableCell sx={bodyCell}>
        {`${datetime.slice(5, 10)} | ${datetime.slice(12, -8)}`}
      </TableCell>
      <TableCell sx={bodyCell}>{isBooked ? 'BOOKED' : 'PENDING'}</TableCell>
      <TableCell sx={bodyCell}>{ava ? 'AVAILABLE' : 'CANCLED'}</TableCell>
      <TableCell sx={bodyCell}>
        <Checkbox
          disabled={!!isBooked}
          checked={!ava}
          onChange={async () => {
            setAva(!ava);
            await axiosInstance.put(`/appointments/${id}`);
          }}
        />
      </TableCell>
    </TableRow>

  );
};

export default RowTable;
