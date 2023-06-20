import { useState } from 'react';
import {
  Box, Grid, Modal, Fade, Button, Typography, Container, Backdrop,
} from '@mui/material';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useFormik } from 'formik';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import validationSchema from '../../pages/therapistProfile/schema';
import classes from './classes';

interface Props {
  handleClose: () => void;
  open: boolean;
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  height: '70%',
  borderRadius: '25px',

};
const AppointmentsModal = ({ handleClose, open }: Props) => {
  const [timeInput, setTimeInput] = useState([1]);

  const addInput = () => {
    setTimeInput((prev) => ([...prev, prev.length + 1]));
  };

  const formik = useFormik({
    initialValues: {
      date: {
        from: '',
        to: '',
      },
      time: [{
        from: '',
        to: '',
      }],
    },
    validationSchema,
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
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
        <Box sx={style} component="form" onSubmit={formik.handleSubmit}>
          <Typography component="b">Choose Your Availability Times </Typography>
          <Typography id="transition-modal-title" variant="body1" component="p" sx={{ margin: '5px', fontSize: '12px' }}>Flexibly select and schedule preferred time slots for availability.</Typography>
          <Typography id="transition-modal-title" variant="body1" component="p" color="error" sx={{ margin: '5px', fontSize: '10px' }}>*selected times will be added as records of one-hour available sessions</Typography>
          <Container>
            <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
              <Box sx={{ overflow: 'auto', height: '300px', py: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="From"
                        value={formik.values.date.from}
                        onChange={(value) => formik.setFieldValue('date.from', value)}
                        slotProps={{
                          textField: {
                            helperText: formik.touched?.date?.from && formik.errors?.date?.from,
                            error: formik.touched?.date?.from
                          && Boolean(formik.errors?.date?.from),
                            size: 'small',
                          },
                        }}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="To"
                        value={formik.values.date.to}
                        onChange={(value) => formik.setFieldValue('date.to', value)}
                        sx={{ height: '0.5rem' }}
                        slotProps={{
                          textField: {
                            helperText: formik.touched?.date?.to && formik.errors?.date?.to,
                            error: formik.touched?.date?.to && Boolean(formik.errors?.date?.to),
                            size: 'small',

                          },
                        }}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  {timeInput.map((_item) => (
                    <div key={_item}>

                      <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
                        <Grid xs={12}>
                          <HighlightOffIcon
                            type="button"
                            onClick={() => {
                              if (timeInput.length === 1) {
                                return;
                              }
                              const filteredInputs = timeInput.filter((ele) => ele !== _item);
                              setTimeInput(filteredInputs);
                            }}
                            sx={classes.Icon}
                          />

                        </Grid>
                        <Grid item xs={6}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                              label="From"
                              value={formik.values.time?.[_item - 1]?.from || ''}
                              onChange={(value) => formik.setFieldValue(`time.${[_item - 1]}.from`, value)}
                              slotProps={{
                                textField: {
                                  size: 'small',

                                //   helperText: (formik.touched?.time?.[_item]?.from
                                // && formik.errors.time?.[_item]?.from) as any,
                                //   error: formik.touched?.time?.[_item]?.from,
                                },
                              }}
                            />
                          </LocalizationProvider>
                        </Grid>
                        <Grid item xs={6}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <TimePicker
                                label="to"
                                value={formik.values.time?.[_item - 1]?.to || ''}
                                onChange={(value) => formik.setFieldValue(`time.${[_item - 1]}.to`, value)}
                            // sx={{ height: '1rem' }}
                                slotProps={{
                                  textField: {
                                    size: 'small',

                                    //   helperText: formik.touched?.time?.[index]?.to
                                    // && formik.errors.time?.[index]?.to,
                                    //   error: formik.touched?.time?.[index]?.to
                                    // && Boolean(formik.errors.time?.[index]?.to),
                                  },
                                }}
                              />
                            </LocalizationProvider>
                          </LocalizationProvider>
                        </Grid>
                      </Grid>
                    </div>
                  ))}
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ width: '100%', marginTop: '3rem' }}
                    onClick={addInput}
                  >
                    Add New Time
                  </Button>

                </Grid>
              </Box>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ width: '100%' }}
                >
                  Confirm
                </Button>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'end' }}>
                <Button variant="outlined" size="large" sx={{ width: '100%' }} onClick={handleClose}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AppointmentsModal;
