import * as yup from 'yup';

const validationSchema = yup.object({
  role: yup.string().required('Role is required'),
  username: yup
    .string().matches(/^[a-zA-Z0-9_]*$/, 'Username should contain only alphabets, numbers and underscore')
    .min(3, 'User name should be of minimum 3 characters length')
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
    .when('role', {
      is: 'user',
      then: (schema) => schema.required('Major is required'),
    }),
  hourlyRate: yup
    .number()
    .when('role', {
      is: 'user',
      then: (schema) => schema.required('Hourly Rate is required'),
    }),
  cv: yup
    .mixed()
    .when('role', {
      is: 'user',
      then: (schema) => schema.required('CV is required')
        .test('fileSize', 'File Size is too large', (value) => {
          if (!value) return false;
          if (value instanceof File) {
            return value.size <= 2000000;
          }
          return true;
        })
        .test('fileType', 'Unsupported File Format', (value) => {
          if (!value) return false;
          if (value instanceof File) {
            return ['application/pdf'].includes(value.type);
          }
          return true;
        }),
    }),
  image: yup
    .mixed()
    .required('Image is required')
    .test('fileSize', 'File Size is too large', (value) => {
      if (!value) return false;
      if (value instanceof File) {
        return value.size <= 2000000;
      }
      return true;
    })
    .test('fileType', 'Unsupported File Format', (value) => {
      if (!value) return false;
      if (value instanceof File) {
        return ['image/jpeg', 'image/png'].includes(value.type);
      }
      return true;
    })
    .required('CV is required'),

});

export default validationSchema;
