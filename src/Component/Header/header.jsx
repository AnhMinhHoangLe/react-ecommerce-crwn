import React from 'react';
import {Link} from 'react-router-dom'
import "./Header.scss"
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../FireBase/firebase'
import {connect} from 'react-redux' // It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.
import CartIcon from '../Cart/Cart-icon/Cart-Icon'
import CartDropDown from '../Cart/Cart-Dropdown/Cart-Dropdown'

import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from "../Redux/user/user.selectors"
import {selectCartHidden} from "../Redux/cart/cart.selectors"

const Header = ({currentUser, hidden}) => {
        return(
                <div className='header'>
                        <Link to="/" className='logo
                        -component' > 
                                <Logo className='logo' />
                        </Link>
                        <div className='options'>
                                <Link to="/shop" className='option' >
                                        SHOP
                                </Link>
                                 <Link to="/shop" className='option' >
                                        CONTACT
                                </Link>
                                { currentUser ? (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>) : (<Link className='option' to="/signin">SIGN IN</Link>) }
                                <CartIcon/>
                        </div>
                        { hidden ?  (<CartDropDown />) : (null) }

                </div>
        )
}
//extracting data
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
const mapStateToProps = (state) => createStructuredSelector({

        currentUser: selectCurrentUser,
        hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header) 