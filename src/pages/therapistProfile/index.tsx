import { useState } from 'react';
import {
  Button, Container,
} from '@mui/material';
import { AppointmentsModal } from '../../components';

const TherapistProfile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container>TherapistProfile Page</Container>
      <Button onClick={handleOpen}>Open modal</Button>
      <AppointmentsModal handleClose={handleClose} open={open} />

    </>
  );
};

export default TherapistProfile;
