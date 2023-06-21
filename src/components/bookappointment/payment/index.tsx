import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../checkoutform';
import axiosInstance from '../../../utils/apis/axios';

const stripePromise = loadStripe('pk_test_51NGyZkEFeMbkGJMBieYj5kVZnmRPzkZ5JVEe6rd4IvSOu1XAAxmN2arJ0LJMGKxFr6LNdyemP9q5tixH3RPUu3Vl00U8U0DSmt');

const Payment = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data : any = await axiosInstance.post('api/v1/create-payment-intent', {
          appointment: [{ id: '1' }],
        });
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error('Error creating payment intent:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {clientSecret && (
        <Elements options={{ clientSecret }} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
