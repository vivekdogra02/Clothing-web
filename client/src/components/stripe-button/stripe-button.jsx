import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';



const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_F2iWUAZDVuEuZeyT55ltOhAf';
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token 
            }
        }).then(res => {
            alert('payment successful')
        }).catch(err => {
            console.log('Payment Error : ', JSON.parse(err))
            alert('There was an issue with your payment')
        })
    
    }
    return (
        <StripeCheckout
            label='Pay now'
            name='Clothing ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;
