import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';

import { DateP } from './types';

const DatePick = ({
  changeDate, date,
}: DateP) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DatePicker']}>
      <DatePicker
        disablePast
        defaultValue={date}
        sx={{ position: 'absolute', top: 0, right: '25px' }}
        onChange={(newValue) => {
          changeDate(dayjs(newValue).format('YYYY-MM-DD'));
        }}
        value={date}
        label="Appointments Calender"
      />
    </DemoContainer>
  </LocalizationProvider>
);

export default DatePick;
