import * as yup from 'yup';

const validationSchema = yup.object({
  date: yup.object({
    from: yup.date().required('From date is required'),
    to: yup.date()
      // .min(yup.ref('date.to'), 'To date should be after from date')
      .required('To date is required'),
  }),
  time: yup
    .array()
    .of(
      yup.object({
        from: yup.date()
          .required('From time is required'),
        to: yup.date()
          .required('To time is required'),
      }),
    )
    .required('Time array is required'),
});

export default validationSchema;
