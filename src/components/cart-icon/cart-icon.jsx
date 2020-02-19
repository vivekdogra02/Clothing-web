
import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import './cart-icon.scss';
import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';


const CartIcon = ({toggleCardHidden}) => (
    <div className='cart-icon' onClick={toggleCardHidden} >
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCardHidden: () =>  dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);