import { Container, Typography } from '@mui/material';
// import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import srsImg from '../../assets/profileImage.jpg';
import TextFieldEdite from '../../components/therapistProfile/inputEdite';

// const isEditable = true;
const TherapistProfile = () => (
  <Container>
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 4" sx={{ ml: 5 }}>
          <img src={srsImg} alt="profile" style={{ borderRadius: '50%', width: '80%' }} />
        </Box>
        <Box gridColumn="span 8" sx={{ ml: 10 }}>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              mt: 5, fontSize: '30px', color: '#2B127B', fontWeight: 'bolder',
            }}
          >
            Dr.Yasser Abu Amro
          </Typography>
          <Typography component="p" sx={{ fontSize: '20px', mt: 2 }}>
            Clinical psychologist and therapis
          </Typography>
          <Typography component="p" sx={{ fontSize: '25px', mt: 4, fontWeight: 'bolder' }}>
            $78.9/for session
          </Typography>
          <Button variant="contained" sx={{ mt: 3 }}>Reserve a Session</Button>
        </Box>
        <Box gridColumn="span 12" sx={{ mt: 4 }}>
          <Box component="div" sx={{ with: '100%', backgroundColor: '#eee' }}>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                ml: 5, pt: 3, fontSize: '30px', color: '#2B127B', fontWeight: 'bolder',
              }}
            >
              <TextFieldEdite value="janeDoe@domain.com" />

              Abstract …
            </Typography>
            <Typography component="p" sx={{ p: 4 }}>
              Consultant medicine and psychiatry in the governmental, private and private sectors
              <br />
              He holds a degree in general psychiatry from the University of Paris
              <br />
              He holds a higher diploma in child psychiatry from the University of Paris
              <br />
              He holds a general medicine degree from Al-Quds University
            </Typography>
            {/* Your content goes here */}

          </Box>
        </Box>
      </Box>
    </Box>

  </Container>
);

export default TherapistProfile;
