import { useState } from 'react';
import { Container, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { AppointmentTableContainer, TherapistHeader } from '../../components';

const TherapistProfile = () => {
  const [error, setError] = useState<boolean>(false);

  // eslint-disable-next-line no-unused-vars
  const [isEditable, setIsEditable] = useState(true);

  if (error) {
    return (

      <Container>
        <Snackbar
          open={error}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          style={{ marginTop: '20px' }}
        >
          <MuiAlert severity="error">
            Therapist not found
          </MuiAlert>
        </Snackbar>
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
