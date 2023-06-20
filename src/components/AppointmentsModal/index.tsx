import { useState } from 'react';
import {
  Box, Grid, Modal, Fade, Button, Typography, Container,
} from '@mui/material';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormikErrors, useFormik } from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import validationSchema from './schema';
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
                            error: Boolean(formik.touched?.date?.from)
                              && Boolean(formik.errors?.date?.from),
                            size: 'small',
                            onBlur: formik.handleBlur,
                            name: 'date.from',
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
                        slotProps={{
                          textField: {
                            helperText: formik.touched?.date?.to && formik.errors?.date?.to,
                            error: Boolean(formik.touched?.date?.to)
                            && Boolean(formik.errors?.date?.to),
                            size: 'small',
                            onBlur: formik.handleBlur,
                            name: 'date.to',

                          },
                        }}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  {timeInput.map((item) => (
                    <div key={item}>

                      <Grid container spacing={2} sx={{ marginTop: '1rem' }}>

                        <Grid item xs={6}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                              label="From"
                              value={formik.values.time?.[item - 1]?.from || ''}
                              onChange={(value) => formik.setFieldValue(`time.${[item - 1]}.from`, value)}
                              slotProps={{
                                textField: {
                                  size: 'small',
                                  name: `time.${[item - 1]}.from`,
                                  helperText: (formik.touched?.time?.[item - 1]?.from
                                  && (formik.errors.time?.[item - 1] as
                                    FormikErrors<{ from: string, to: string}>)?.from),
                                  error: Boolean(formik.touched?.time?.[item - 1]?.from)
                                    && Boolean((formik.errors?.time?.[item - 1] as
                                      FormikErrors<{ from: string; to: string; }>)?.from),
                                  onBlur: formik.handleBlur,

                                },
                              }}
                            />
                          </LocalizationProvider>
                        </Grid>
                        <Grid item xs={timeInput.length === 1 ? 6 : 5}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <TimePicker
                                label="to"
                                value={formik.values.time?.[item - 1]?.to || ''}
                                onChange={(value) => formik.setFieldValue(`time.${[item - 1]}.to`, value)}
                                slotProps={{
                                  textField: {
                                    size: 'small',
                                    name: `time.${[item - 1]}.to`,

                                    helperText: (formik.touched?.time?.[item - 1]?.to
                                      && (formik.errors.time?.[item - 1] as
                                        FormikErrors<{ from: string, to: string}>)?.to),
                                    error: Boolean(formik.touched?.time?.[item - 1]?.to)
                                        && Boolean((formik.errors?.time?.[item - 1] as
                                          FormikErrors<{ from: string; to: string; }>)?.to),
                                    onBlur: formik.handleBlur,
                                  },
                                }}
                              />
                            </LocalizationProvider>
                          </LocalizationProvider>
                        </Grid>
                        {timeInput.length > 1 && (

                          <Grid item xs={1}>
                            <DeleteIcon
                              type="button"
                              onClick={() => {
                                if (timeInput.length === 1) {
                                  return;
                                }
                                const filteredInputs = timeInput.filter((ele) => ele !== item);
                                setTimeInput(filteredInputs);
                              }}
                              sx={classes.Icon}
                            />
                          </Grid>
                        )}
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
