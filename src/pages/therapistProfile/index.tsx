import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import AppointmentTableContainer from '../../components/appointmentsTable';

const TherapistProfile = () => {
  const therapistID: string | undefined = useParams().id;
  return (
    <Container>
      <AppointmentTableContainer id={therapistID} />
    </Container>
  );
};
export default TherapistProfile;
