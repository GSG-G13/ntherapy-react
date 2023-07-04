import { useState, useContext } from 'react';
import { Container, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { AppointmentTableContainer, TherapistHeader } from '../../components';
import { userDataContext } from '../../context';

const TherapistProfile = () => {
  const dataa = useContext(userDataContext);
  console.log(dataa, 'userData');
  const [error, setError] = useState<boolean>(false);

  const isEditable = false;

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
