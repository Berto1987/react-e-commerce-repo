import { useState } from "react";
import { CardElement,useElements,useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectcurrentUser } from "../../store/user/user.selector";
import {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { FormContainer,PaymentFormContainer,PaymentButton} from "./payment-form.styles";




const PaymentForm = () => {
 const stripe = useStripe();
 const elements = useElements();
 const amount = useSelector(selectCartTotal);
 const currentUser = useSelector(selectcurrentUser);
 const [isProcessingPayment, setisProcessingPayment] = useState(false);

 const paymentHandler = async(e) => {
    e.preventDefault();
    if(!stripe || !elements) {
        return;
    } 
     setisProcessingPayment(true)
     
    const response = await fetch('/.netlify/functions/create-payment-intent',{
      method: 'post',
      header: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({amount: amount * 100}),

    }
    
    ).then(res => res.json());

    const {paymentIntent:{client_secret} } = response;
    

    const paymentResult = await stripe.confirmCardPayment(client_secret,{
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      }
    } );

   setisProcessingPayment(false);

     if(paymentResult.error) {
      alert(paymentResult.error);
     }else {
      if(paymentResult.paymentIntent.status === 'succeded') {
        alert('Payment Successful');
      }
     }
    
 };







   return (
     <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2> Credit Card Payment</h2>
         <CardElement  />
         <PaymentButton disabled={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay Now </PaymentButton>
         </FormContainer>
       </PaymentFormContainer>
       )
}

export default PaymentForm;