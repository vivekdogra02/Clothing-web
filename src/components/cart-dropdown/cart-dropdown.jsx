import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../custom-button/custom-button';


const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        </div>
        <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
);

export default CartDropdown;