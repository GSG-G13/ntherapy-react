import { ThemeProvider } from '@emotion/react';
import { Close } from '@mui/icons-material';
import {
  CssBaseline,
  Container, Paper, IconButton, Typography, Stepper, Step, StepLabel, Box, Button, Modal,
} from '@mui/material';
import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import ModelStyle from '../../../pages/therapistProfile/classes';
import BookAppointment from '../dateTime/index';
import StripePaymentForm from '../payment';

const steps = ['select appointment', 'Payment details'];
const defaultTheme = createTheme();

const Comp = ({ step, setIsDisabled }: any) => {
  switch (step) {
    case 0:
      return <BookAppointment setIsDisabled={setIsDisabled} />;
    case 1:
      return <StripePaymentForm />;
    default:
      return null;
  }
};

const ModalComponents = ({ open, setOpen } : [boolean, boolean]) => {
  const handleClose = () => setOpen(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [isDisabled, setIsDisabled] = React.useState(false);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={ModelStyle}
    >
      <ThemeProvider theme={defaultTheme}>

        <CssBaseline />

        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>

          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <IconButton
              aria-label="close"
              color="inherit"
              onClick={handleClose}
              sx={{
                ml: '90%',
              }}
            >
              <Close />
            </IconButton>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <Typography variant="h5" gutterBottom>
                Thank you
              </Typography>
            ) : (
              <>
                <Comp step={activeStep} setIsDisabled={setIsDisabled} />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  {activeStep === 0 && (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                      disabled={isDisabled}
                    >
                      next
                    </Button>
                  )}
                </Box>
              </>
            )}
          </Paper>
        </Container>
      </ThemeProvider>
    </Modal>
  );
};
export default ModalComponents;
