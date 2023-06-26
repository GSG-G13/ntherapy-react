import { Container, Button } from '@mui/material';

import { useState } from 'react';

import { AppointmentsModal, AppointmentTableContainer } from '../../components';

const TherapistProfile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Container>TherapistProfile Page</Container>
      <Button onClick={handleOpen}> Add Appointment</Button>
      {open && <AppointmentsModal handleClose={handleClose} open={open} />}
      <Container>
        <AppointmentTableContainer />
      </Container>
    </>
  );
};

export default TherapistProfile;
