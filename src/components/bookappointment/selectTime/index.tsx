import React, { useEffect } from 'react';
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
import axiosInstance from '../../../utils/apis/axios';
import getTimeRange from '../../../utils/TimeRange';
import ElementTimeType from './type';

const BookAppointment = ({ formik }: any) => {
  const params = useParams();
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2023-06-18'));
  const [time, setTime] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        formik.setFieldValue('appointmentId', '');
        const data = await axiosInstance.get(`api/v1/appointments/${params.id}?date=${moment(value?.$d).format('YYYY-MM-DD')}`);
        setTime(data.data);
      } catch (error) {
        console.error('Errorappointments intent:', error);
      }
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const message = time.length === 0 ? 'Sorry No appointments Found' : '';
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
            label={time.length ? 'select Time' : message}
            sx={{
              borderColor: message ? 'red' : 'black',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: message ? 'red' : 'black',
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
    </>
  );
};

export default BookAppointment;
