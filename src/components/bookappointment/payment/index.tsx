import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useSnackbar } from 'notistack';
import CheckoutForm from '../../checkoutform';
import axiosInstance from '../../../utils/apis/axios';

const { VITE_PUBLIC_API_KEY } = import.meta.env;
const stripePromise = loadStripe(VITE_PUBLIC_API_KEY);

const Payment = () => {
  const [clientSecret, setClientSecret] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const data: any = await axiosInstance.post('payment-intent', {
          // we will get price from Doctor profile
          SessionPrice: 100,
        });

        setClientSecret(data.clientSecret);
      } catch (err) {
        enqueueSnackbar('Failed to create payment intent.', { variant: 'error' });
      }
    };
    getClientSecret();
  }, [enqueueSnackbar]);

  return (
    <div>
      {clientSecret ? (
        <Elements options={{ clientSecret }} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Payment;
