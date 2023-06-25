import { Dayjs } from 'dayjs';
import { useState } from 'react';

export interface TAppointments {
  date: Dayjs | string,

  }
export interface DateP {
    date: string | Dayjs,
    setDate: typeof useState<string | Dayjs>,

  }

export interface Appointment{
    id: number;
    isBooked: boolean;
    isAvailable: boolean;
    datetime: string;
    therapistId: number
  }

export interface TRow {
    appointment: Appointment
  }
