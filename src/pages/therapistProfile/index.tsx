import { Container, Typography } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import srsImg from '../../assets/profileImage.jpg';
import TextFieldEdite from '../../components/therapistProfile/inputEdite';
import ChangePhoto from '../../components/therapistProfile/changePhoto';

const daataTas = `
              Consultant medicine and psychiatry in the governmental, private and private sectors
              He holds a degree in general psychiatry from the University of Paris
              He holds a higher diploma in child psychiatry from the University of Paris
              He holds a general medicine degree from Al-Quds University Ahmed" 
`;
const TherapistProfile = () => {
  const [name, setName] = useState('Dr.Yasser Amro');
  const [major, setMajor] = useState('Mental Health Counselor');
  const [hourlyRate, setHourlyRate] = useState('$85');
  const [textBio, setTextBio] = useState(daataTas);
  const [image, setImage] = useState(srsImg);

  const handleChangeName = (event: any) => {
    setName(event.target.value);
  };
  const handleChangeMajor = (event: any) => {
    setMajor(event.target.value);
  };
  const handleChangehourlyRate = (event: any) => {
    setHourlyRate(event.target.value);
  };
  const handleChangeTextBio = (event: any) => {
    setTextBio(event.target.value);
  };
  const handleFileChange = (event:any) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
    console.log(file);
  };

  return (
    <Container>
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
              <TextFieldEdite value={`${hourlyRate}/for session`} data="p" onChange={handleChangehourlyRate} />
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
                Abstract …
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

    </Container>
  );
};

export default TherapistProfile;
