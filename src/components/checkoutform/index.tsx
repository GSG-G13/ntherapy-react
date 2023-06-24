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

  const handleSubmit = async (e:Event) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: 'http://localhost:5173/',
        },
        redirect: 'if_required',
      });

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
      <Button
        sx={{ mt: 3 }}
        variant="contained"
        disabled={!stripe || !elements}
        id="submit"
        type="submit"
      >
        Booki
      </Button>
    </form>
  );
};

export default CheckoutForm;
