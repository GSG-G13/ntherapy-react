import { Container } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import DatePick from './datePicker';
import AppointmentsTable from './table';
import { TContainer } from './types';

const AppointmentTableContainer = ({ id }: TContainer) => {
  const [date, setDate] = useState<Dayjs | string >(dayjs('2023-01-1'));
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <Container sx={{ position: 'relative' }}>
      <DatePick date={date} changeDate={setDate as typeof useState<Dayjs | string>} />
      <AppointmentsTable
        id={id}
        loadingChange={setLoading as typeof useState<boolean>}
        loading={loading}
        date={date}
        changeDate={setDate as typeof useState<Dayjs | string>}
      />
    </Container>
  );
};

export default AppointmentTableContainer;
