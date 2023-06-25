import { Container } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import utc from 'dayjs/plugin/utc';
import DatePick from './datePicker';
import AppointmentsTable from './table';

dayjs.extend(utc);
const AppointmentTableContainer = () => {
  const [date, setDate] = useState<Dayjs | string >(dayjs().utc(true).local().format('YYYY-MM-DD'));
  return (
    <Container sx={{ position: 'relative' }}>
      <DatePick
        date={date}
        setDate={setDate as typeof useState<Dayjs | string>}
      />
      <AppointmentsTable
        date={date}
      />
    </Container>
  );
};

export default AppointmentTableContainer;
