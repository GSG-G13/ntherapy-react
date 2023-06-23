import { Container, Skeleton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import TextFieldEdite from '../../components/therapistProfile/inputEdite';
import ChangePhoto from '../../components/therapistProfile/changePhoto';
import axiosInstance from '../../utils/apis/axios';

interface TherapistData {
  id: number;
  cvLink: string;
  profileImg: string;
  major: string;
  hourlyRate: number,
  bio: string;
  // Add other properties here
  user: {
    fullName?: string;
    email?: string,
    isActive: boolean,

  };
}
const TherapistProfile = () => {
  const { id } = useParams();
  console.log(id);
  const [dataT, setData] = useState<TherapistData | null>(null);
  const [name, setName] = useState<string>('');
  const [major, setMajor] = useState<string>('');
  const [hourlyRate, setHourlyRate] = useState<number>(0);
  const [textBio, setTextBio] = useState<string>('');
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get<TherapistData>(`api/v1/therapists/${id}`);
        const { data } = response;
        console.log(data);
        setData(data);
        setName(data.user?.fullName || '');
        setMajor(data.major || '');
        setHourlyRate(data.hourlyRate || 0);
        setTextBio(data.bio || '');
        setImage(data.profileImg || '');
      } catch (error) {
        console.error(error);
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
      console.log(file);
    }
  };

  return (
    <Container>
      {dataT ? (
        <Box sx={{ width: 1, mt: 8 }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 5">
              <img
                src={image}
                alt="profile"
                style={{
                  width: '100%', height: '260px', objectFit: 'cover',
                }}
              />
              <ChangePhoto onChange={handleFileChange} />
            </Box>

            <Box sx={{
              width: '500px',
              ml: '50px',
            }}
            >
              <TextFieldEdite value={name} dataType="h1" onChange={handleChangeName} />
              <TextFieldEdite value={major} dataType="p" onChange={handleChangeMajor} />

              <Box>
                <TextFieldEdite value={`$${hourlyRate} /for session`} data="p" onChange={handleChangeHourlyRate} />
              </Box>
              <Button variant="contained">Reserve a Session</Button>
            </Box>
            <Box gridColumn="span 12" sx={{ mt: 4 }}>
              <Box component="div" sx={{ width: '85%', backgroundColor: '#eee' }}>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{
                    ml: 7, pt: 3, fontSize: '28px', color: '#2B127B', fontWeight: 'bolder',
                  }}
                >
                  Abstract ...
                </Typography>
                <TextFieldEdite
                  value={textBio}
                  dataType="textArea"
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
