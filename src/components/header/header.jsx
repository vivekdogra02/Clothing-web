import React from 'react'

import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'> SHOP </Link>
            <Link className='option' to='/contact'> CONTACTS</Link>
            {currentUser ? (<div className='option' onClick={() => auth.signOut()}>Sign Out</div>) :
                (<Link className='option' to='/signIn'> Sign In</Link>)
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);