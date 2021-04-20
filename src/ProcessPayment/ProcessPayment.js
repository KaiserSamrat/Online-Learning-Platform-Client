import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';
const stripePromise = loadStripe('pk_test_51IhFjgDir1KsyyMNQsvKURveekiMiUE5HOYtKtdw8gNwHFSPlKaNO4gyBJ0zHe47O3IKzrkBFor4JRp3eV3hXBH500FtYsHhrz');
const ProcessPayment = () => {
    return (
         <Elements stripe={stripePromise}>
            <SimpleCardForm></SimpleCardForm>
       
      </Elements>
    );
};

export default ProcessPayment;