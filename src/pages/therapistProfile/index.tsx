import { useState } from 'react';

import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import AppointmentsTable from '../../components/therapistProfile/table';
import DatePick from '../../components/therapistProfile/datePicker';

const TherapistProfile = () => {
  const [date, setDate] = useState('2020-12-08');
  const { id }: string | undefined = useParams();

  return (
    <Container>
      <AppointmentsTable date={date} id={id} />
      <DatePick changeDate={setDate} />
    </Container>
  );
};
export default TherapistProfile;
