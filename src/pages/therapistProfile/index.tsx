import { useEffect, useState, useContext } from 'react';
import { Container, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useParams } from 'react-router-dom';
import { AppointmentTableContainer, TherapistHeader } from '../../components';
import { userDataContext } from '../../context';

const TherapistProfile = () => {
  const { id } = useParams();

  const [error, setError] = useState<boolean>(false);

  const userContext = useContext(userDataContext);
  const userData = userContext?.userData;

  const isProfileOwner = Boolean(userData && id === userData.id.toString());

  useEffect(() => {
    document.body.style.backgroundColor = 'rgb(244, 244, 245)';
  });

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
    <Container sx={{
      // backgroundColor: 'red',
    }}
    >
      <TherapistHeader isProfileOwner={isProfileOwner} setError={setError} />
      {
        isProfileOwner
        && <AppointmentTableContainer />

      }
    </Container>
  );
};

export default TherapistProfile;
