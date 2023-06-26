import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container, Snackbar, Typography, Box, Button,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Skeleton from '@mui/material/Skeleton';
import axiosInstance from '../../utils/apis/axios';
import { TextFieldEdited, ChangePhoto } from '../../components';
import {
  imageStyle, TherapistData,
} from './classes';

const TherapistProfile = () => {
  const { id } = useParams();
  const [dataFromTherapist, setDataFromTherapist] = useState<TherapistData | null>(null);
  const [name, setName] = useState<string>('');
  const [major, setMajor] = useState<string>('');
  const [hourlyRate, setHourlyRate] = useState<number>(0);
  const [textBio, setTextBio] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get<TherapistData>(`therapists/${id}`);
        const { data } = response;
        setDataFromTherapist(data);
        setName(data.user?.fullName || '');
        setMajor(data.major || '');
        setHourlyRate(data.hourlyRate || 0);
        setTextBio(data.bio || '');
        setImage(data.profileImg || '');
      } catch (err) {
        setError(true);
      }
    };

    fetchData();
  }, [id]);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeMajor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMajor(event.target.value);
  };

  const handleChangeHourlyRate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHourlyRate(Number(event.target.value));
  };

  const handleChangeTextBio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextBio(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

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
      {dataFromTherapist ? (
        <Box sx={{ width: 1, mt: 8 }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 5">
              <img
                src={image}
                alt="profile"
                style={imageStyle}
              />
              <ChangePhoto onChange={handleFileChange} />
            </Box>

            <Box sx={{ width: '500px', ml: '50px' }}>
              <TextFieldEdited value={name} dataType="fullName" onChange={handleChangeName} />
              <TextFieldEdited value={major} dataType="major" onChange={handleChangeMajor} />

              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                fontFamily: 'inherit',
                width: '600px',
                marginTop: '16px',
              }}
              >
                <Typography sx={{ fontWeight: 'bold', mt: 1, fontSize: '18px' }}>for session: $</Typography>
                <TextFieldEdited value={hourlyRate} dataType="hourlyRate" onChange={handleChangeHourlyRate} />
              </Box>
              <Button variant="contained" style={{ marginTop: '16px' }}>Reserve a Session</Button>
            </Box>
            <Box gridColumn="span 12" sx={{ mt: 4 }}>
              <Box
                component="div"
                sx={{
                  backgroundColor: '#F5F5F5',
                  padding: '16px',
                  borderRadius: '8px',
                }}
              >
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{ fontWeight: 'bold', marginBottom: '16px' }} // تنسيق العنوان
                >
                  Abstract ...
                </Typography>
                <TextFieldEdited
                  value={textBio}
                  dataType="bio"
                  onChange={handleChangeTextBio}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <>
          <div style={{ display: 'flex' }}>
            <Skeleton variant="rectangular" width={300} height={300} />
            <Skeleton variant="text" sx={{ ml: 4, width: '50%' }} />
          </div>
          <Skeleton variant="rectangular" width={1000} height={300} sx={{ mt: 5 }} />
        </>
      )}
    </Container>
  );
};

export default TherapistProfile;
