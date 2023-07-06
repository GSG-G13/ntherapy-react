import { useState, useContext } from 'react';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { AppointmentTableContainer, TherapistHeader } from '../../components';
import { userDataContext } from '../../context';

const TherapistProfile = () => {
  const { id } = useParams();

  const [error, setError] = useState<boolean>(false);

  const userContext = useContext(userDataContext);
  const userData = userContext?.userData;

  const isProfileOwner = Boolean(userData && id === userData.therapistId?.toString());

  if (error) {
    return (

      <Container sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px',
      }}
      >
        <img src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/media/8b4662f8023e4e2295f865106b5d3aa7.gif" alt="empty" style={{ width: '50%', height: '50%' }} />
      </Container>
    );
  }

  return (
    <Container>
      <TherapistHeader isProfileOwner={isProfileOwner} setError={setError} />
      {
        isProfileOwner
        && <AppointmentTableContainer />

      }
    </Container>
  );
};

export default TherapistProfile;
