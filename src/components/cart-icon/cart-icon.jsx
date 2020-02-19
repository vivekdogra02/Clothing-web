
import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import './cart-icon.scss';
import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


const CartIcon = ({toggleCardHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCardHidden} >
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'> {itemCount} </span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCardHidden: () =>  dispatch(toggleCartHidden())
});

const mapStateToProps =  createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);