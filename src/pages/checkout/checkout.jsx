import React  from 'react';
import './checkout.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import CheckOutItem from '../../components/checkout-item/checkout-item';

const CheckOutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span className=''>Product</span>
            </div>
            <div className='header-block'>
                <span className=''>Description</span>
            </div>
            <div className='header-block'>
                <span className=''>Quantity</span>
            </div>
            <div className='header-block'>
                <span className=''>Price</span>
            </div>
            <div className='header-block'>
                <span className=''>Remove</span>
            </div>
        </div>
        {cartItems.map(cart => 
            (<CheckOutItem key={cart.id} cartItem= {cart} />)
        )}
        <div className='total'>
            <span>Total: ${total} </span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);