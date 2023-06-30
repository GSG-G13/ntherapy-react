import { useState } from 'react';
import {
  Container, Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';

import {
  AppointmentTableContainer, TherapistHeader,
} from '../../components';

const TherapistProfile = () => {
  const [error, setError] = useState<boolean>(false);

  // eslint-disable-next-line no-unused-vars
  const [edited, setEdited] = useState(true);

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
      <TherapistHeader edited={edited} setError={setError} />
      {
        edited
        && <AppointmentTableContainer />

      }
    </Container>
  );
};

export default TherapistProfile;
