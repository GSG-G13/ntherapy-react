import { SyntheticEvent, useState } from 'react';
import { CircularProgress, Container } from '@mui/material';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack';

const CheckoutForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: 'if_required',
      });
      setIsLoading(false);
      if (error) {
        enqueueSnackbar(error.message, { variant: 'error' });
      } else if (paymentIntent?.status === 'succeeded') {
        enqueueSnackbar('Payment succeeded 🔥', { variant: 'success' });
      }
    } catch (error) {
      enqueueSnackbar('An error occurred while confirming the payment.', { variant: 'error' });
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>

      <PaymentElement id="payment-element" />
      <Container sx={{
        position: 'relative', display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end',
      }}
      >
        <Button
          sx={{
            mt: 3,
            position: 'absolute',
            bottom: '-60px',
            right: '10px',
          }}
          variant="contained"
          disabled={isLoading || !stripe || !elements}
          id="submit"
          type="submit"
        >

          {isLoading
            ? (
              <div className="spinner" id="spinner">
                <CircularProgress size={20} />
              </div>
            )
            : 'Book'}
        </Button>
      </Container>
    </form>
  );
};

export default CheckoutForm;
