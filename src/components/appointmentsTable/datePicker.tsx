import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';

import { DateP } from './types';

const DatePick = ({
  setDate,
}: DateP) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DatePicker']}>
      <DatePicker
        sx={{ position: 'absolute', top: 0, right: '25px' }}
        onChange={(newValue: string | null) => {
          setDate(dayjs(newValue).format('YYYY-MM-DD'));
        }}
        label="Appointments Calender"
      />
    </DemoContainer>
  </LocalizationProvider>
);

export default DatePick;
