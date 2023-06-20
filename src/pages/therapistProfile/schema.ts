import * as yup from 'yup';

const validationSchema = yup.object({
  date: yup.object({
    from: yup.date().required('From date is required'),
    to: yup.date()
      .min(yup.ref('date.to'), 'To date should be after from date')
      .required('To date is required'),
  }),
  time: yup
    .array()
    .of(
      yup.object({
        from: yup.date()
          .min(yup.ref('fromDate'), 'To date should be after from date')
          .required('From date is required'),
        to: yup.date()
          .min(yup.ref('fromTime'), 'To time should be after from time')
          .required('To date is required'),
      }),
    )
    .required('Time array is required'),
});
  // to: yup
  // toDate: yup
  //   .date()
  //   .required('To date is required')
  //   .min(yup.ref('fromDate'), 'To date should be after from date'),
  // fromTime: yup
  //   .date()
  //   .required('From time is required'),
  // toTime: yup
  //   .date()
  //   .required('To time is required')
  //   .min(yup.ref('fromTime'), 'To time should be after from time'),
// });

export default validationSchema;
