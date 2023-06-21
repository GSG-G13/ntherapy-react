import { Container } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';

import ModalComponents from '../../components/bookappointment/modal';

const TherapistProfile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <Container>
      <Button onClick={handleOpen}>Reserve a Session</Button>
      <ModalComponents open={open} setOpen={setOpen} />
    </Container>
  );
};

export default TherapistProfile;
