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

interface ElementTimeType {
    id: number,
    datetime: string,
    therapistId: number,
    isAvailable: boolean,
    isBooked: boolean,
}

const BookAppointment = ({ setIsDisabled }: boolean) => {
  const params = useParams();
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2023-06-18'));
  const [time, setTime] = React.useState([]);
  const [message, setMessage] = React.useState<string | null >('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axiosInstance.get(`api/v1/appointments/${params.id}?date=${moment(value?.$d).format('YYYY-MM-DD')}`);
        if (data.message === 'sorry but no appointments found') {
          setIsDisabled(true);
          setMessage(data.message);
        }
        setTime(data.data);
      } catch (error) {
        console.error('Errorappointments intent:', error);
      }
    };
    fetchData();
  }, [params.id, setIsDisabled, value?.$d]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Book Appointment
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Controlled picker"
              value={value}
              onChange={(newValue) => setValue(newValue)}
              sx={{ width: '100%' }}
            />
          </LocalizationProvider>

        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Select Time"
            select
            fullWidth
            variant="outlined"
          >
            {time.map((ele: ElementTimeType) => {
              if (!ele.isAvailable || ele.isBooked) {
                return null;
              }
              const timeRange = getTimeRange(ele.datetime);
              return (
                <MenuItem value={ele.id} key={ele.id}>
                  {timeRange.from}
                  -
                  {timeRange.to}
                </MenuItem>
              );
            })}
          </TextField>
          {message}
        </Grid>
      </Grid>
    </>
  );
};

export default BookAppointment;
