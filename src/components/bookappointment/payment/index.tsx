import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Snackbar, SnackbarContent } from '@mui/material';
import CheckoutForm from '../../checkoutform';
import axiosInstance from '../../../utils/apis/axios';

const { VITE_PUBLIC_API_KEY } = import.meta.env;
const stripePromise = loadStripe(VITE_PUBLIC_API_KEY);

const Payment = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const data : any = await axiosInstance.post('create-payment-intent');
        setClientSecret(data.clientSecret);
      } catch (err) {
        setError('Failed to create payment intent.');
      }
    };
    getClientSecret();
  }, []);
  const handleSnackbarClose = () => {
    setError('');
  };

  return (
    <div>
      {clientSecret ? (
        <Elements options={{ clientSecret }} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      ) : (
        <div>Loading...</div>
      )}
      <Snackbar open={!!error} onClose={handleSnackbarClose}>
        <SnackbarContent
          sx={{ backgroundColor: 'red' }}
          message={error}
        />
      </Snackbar>
    </div>
  );
};

export default Payment;
