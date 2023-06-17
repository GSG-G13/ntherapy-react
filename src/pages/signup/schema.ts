import * as yup from 'yup';

const validationSchema = yup.object({
  username: yup
    .string().matches(/^[a-zA-Z0-9_]*$/, 'Username should contain only alphabets, numbers and underscore')
    .min(3, 'Username should be of minimum 3 characters length')
    .required('Username is required'),
  email: yup
    .string().email('Enter a valid email')
    .test('email-domain', 'Enter a valid email', (value) => {
      if (!value) return false;
      const emailParts = value.split('@');
      const domain = emailParts[emailParts.length - 1];
      return domain === 'gmail.com';
    })
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  major: yup
    .string()
    .required('Major is required'),
  hourlyRate: yup
    .number()
    .required('Hourly Rate is required'),

});

export default validationSchema;
