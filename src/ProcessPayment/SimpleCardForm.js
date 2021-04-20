import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const SimpleCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError,setPaymentError] = useState(null)
  const [paymentSucess,setPaymentSucess] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
     
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSucess(null)
    } else {
        setPaymentSucess(paymentMethod.id)
        setPaymentError(null)
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {
        paymentError && <p style={{color:"red"}}>{paymentError}</p>
    }
      {
        paymentSucess && <p style={{color:"green"}}>Your payment is successfull</p>
    }
    </div>
  );
};
export default SimpleCardForm;