import { Dayjs } from 'dayjs';
import { useState } from 'react';

export interface TContainer {
  id: string | undefined;
}

export interface TAppointments {
  id: string | undefined,
  date: Dayjs | string,
  loading: boolean,
  loadingChange: typeof useState<boolean>,
  changeDate: typeof useState<string |Dayjs>,
  }

export interface Appointment{
    id: number;
    isBooked: boolean;
    isAvailable: boolean;
    datetime: string;
    therapistId: number
  }

export interface TRow {
    appo: Appointment
  }
