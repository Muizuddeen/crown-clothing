import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton =({price}) =>{
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_pR9xnI959T4ZaJKnt819ENun00PlAxa1Wi';

  const onToken = token => {
  console.log(onToken);
  alert("Payment Successful");
}
  return(
    <StripeCheckout
    label = "Pay Now"
    name  = "CROWN Clothing Ltd."
    billingAddress
    shippingAddress
    image = "https://svgshare.com/i/CUz.svg"
    description ={`Your total is $${price}`}
    amount ={priceForStripe}
    panelLabel ="Pay Now"
    token ={onToken}
    stripeKey = {publishableKey}
    />
  );
};
export default StripeCheckoutButton;
