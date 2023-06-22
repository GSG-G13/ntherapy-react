import moment from 'moment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

const DatePick = ({ changeDate }: any) => (
  <LocalizationProvider dateAdapter={AdapterMoment}>
    <DemoContainer components={['DatePicker']}>
      <DatePicker
        sx={{ width: '300px', margin: 'auto' }}
        format="YYYY/MM/DD"
        onChange={(value: string | null) => {
          changeDate(moment(value, 'YYYY-MM-DD').format('YYYY-MM-DD'));
        }}
        label="Appointments Dates"
      />
    </DemoContainer>
  </LocalizationProvider>
);

export default DatePick;
