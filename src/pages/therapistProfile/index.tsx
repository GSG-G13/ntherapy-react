import {
  Button, Container,
} from '@mui/material';
import { useState } from 'react';
import { AppointmentsModal, SessionReservationModal } from '../../components';

const TherapistProfile = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Button onClick={handleOpenModal}>Reserve a Session</Button>
      <SessionReservationModal open={openModal} setOpen={setOpenModal} />
      <Button onClick={handleOpen}> Add Appointment</Button>
      {open && <AppointmentsModal handleClose={handleClose} open={open} />}
    </Container>
  );
};
export default TherapistProfile;
