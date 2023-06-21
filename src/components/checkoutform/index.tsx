import { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  const handleSnackbarClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:5173/therapist/${params.id}`,
      },
      redirect: 'if_required',
    });
    if (error) {
      setMessage(error.message);
    } if (paymentIntent?.status === 'succeeded') {
      setMessage('succeeded 🔥');
      setOpen(true);
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>

      <PaymentElement id="payment-element" />
      <Button
        sx={{ mt: 3 }}
        variant="contained"
        disabled={isLoading || !stripe || !elements}
        id="submit"
        type="submit"
      >
        {isLoading ? <div className="spinner" id="spinner" /> : 'Booki'}
      </Button>
      {message && <div id="payment-message">{message}</div>}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert onClose={handleSnackbarClose}>
          {message}
        </MuiAlert>
      </Snackbar>

    </form>
  );
};

export default CheckoutForm;
