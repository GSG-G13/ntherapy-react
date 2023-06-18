import { useState } from 'react';
import {
  Box, Grid, Modal, Fade, Button, Typography, Container, Backdrop,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';

const TherapistProfile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    height: '34rem',
  };
  return (
    <>
      <Container>TherapistProfile Page</Container>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <h4>Choose Your Availability Times</h4>
            <Typography id="transition-modal-title" variant="body1" component="p" sx={{ margin: '5px' }}>Flexibly select and schedule preferred time slots for availability.</Typography>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={6} sx={{ marginTop: '3rem' }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="From" sx={{ height: '1rem' }} />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6} sx={{ marginTop: '3rem' }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="to" sx={{ height: '1rem' }} />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6} sx={{ marginTop: '3rem' }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker label="from" sx={{ height: '1rem' }} />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6} sx={{ marginTop: '3rem' }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker label="to" sx={{ height: '1rem' }} />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6} sx={{ marginTop: '14rem' }}>
                  <Button variant="contained" size="large" sx={{ width: '100%' }}>
                    Confirm
                  </Button>
                </Grid>
                <Grid item xs={6} sx={{ marginTop: '14rem', textAlign: 'end' }}>
                  <Button variant="outlined" size="large" sx={{ width: '100%' }}>
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default TherapistProfile;
