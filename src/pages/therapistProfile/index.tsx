import { Container, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import AppointmentTableContainer from '../../components/appointmentsTable';
import { AppointmentsModal } from '../../components';

const TherapistProfile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const therapistID: string | undefined = useParams().id;
  return (
    <>
      <Container>TherapistProfile Page</Container>
      <Button onClick={handleOpen}> Add Appointment</Button>
      {open && <AppointmentsModal handleClose={handleClose} open={open} />}
      <Container>
        <AppointmentTableContainer id={therapistID} />
      </Container>
    </>
  );
};

export default TherapistProfile;
