import { useState } from 'react';
import { Container } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { AppointmentTableContainer, TherapistHeader } from '../../components';

const TherapistProfile = () => {
  const [error, setError] = useState<boolean>(false);

  // eslint-disable-next-line no-unused-vars
  const [isEditable, setIsEditable] = useState(true);

  if (error) {
    return (
      <Container>
        {
          enqueueSnackbar('Therapist not found', { variant: 'error' })
       }
      </Container>
    );
  }

  return (
    <Container>
      <TherapistHeader isEditable={isEditable} setError={setError} />
      {
        isEditable
        && <AppointmentTableContainer />

      }
    </Container>
  );
};

export default TherapistProfile;
