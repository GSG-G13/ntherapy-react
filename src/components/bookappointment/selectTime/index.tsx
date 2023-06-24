import React, { useEffect, useMemo, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useParams } from 'react-router-dom';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import { FormikProps } from 'formik';
import { Snackbar } from '@mui/material';
import axiosInstance from '../../../utils/apis/axios';
import getTimeRange from '../../../utils/TimeRange';
import ElementTimeType from './type';

const BookAppointment = ({ formik }: FormikProps<string>) => {
  const params = useParams();
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2023-06-18'));
  const [time, setTime] = React.useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getAppointments = async () => {
      try {
        formik.setFieldValue('appointmentId', '');
        const data = await axiosInstance.get(`appointments/${params.id}?date=${moment(value?.$d).format('YYYY-MM-DD')}`);
        setTime(data.data);
      } catch (error) {
        setErrorMessage('Failed to fetch appointments.');
      }
    };
    getAppointments();
  }, [value, formik, params.id]);
  const handleSnackbarClose = () => {
    setErrorMessage('');
  };

  const timeErrorMessage = useMemo(() => (time.length === 0 ? 'Sorry, no appointments found.' : ''), [time]);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Book Appointment
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="select Date"
              onChange={(newValue) => setValue(newValue)}
              value={value}
              sx={{ width: '100%' }}
            />
          </LocalizationProvider>

        </Grid>
        <Grid item xs={12}>
          <TextField
            label={time.length ? 'Select Time' : timeErrorMessage}
            sx={{
              borderColor: timeErrorMessage ? 'red' : 'black',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: timeErrorMessage ? 'red' : 'black',
                },
              },
            }}
            select
            fullWidth
            variant="outlined"
            value={formik.values.appointmentId}
            name="appointmentId"
            error={formik.touched.appointmentId && Boolean(formik.errors.appointmentId)}
            helperText={formik.touched.appointmentId && formik.errors.appointmentId}
          >
            {time.map((ele: ElementTimeType) => {
              if (!ele.isAvailable || ele.isBooked) {
                return null;
              }
              const timeRange = getTimeRange(ele.datetime);
              return (
                <MenuItem
                  value={ele.id}
                  key={ele.id}
                  onClick={() => {
                    formik.setFieldValue('appointmentId', ele.id);
                  }}
                >
                  {timeRange.from}
                  -
                  {timeRange.to}
                </MenuItem>
              );
            })}
          </TextField>
        </Grid>
      </Grid>
      <Snackbar open={!!errorMessage} onClose={handleSnackbarClose} message={errorMessage} />
    </>
  );
};

export default BookAppointment;
