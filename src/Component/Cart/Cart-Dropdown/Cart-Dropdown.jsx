import React from 'react';
import {connect} from 'react-redux'
import CustomButton from '../../custom-button/custom-button';
import CartItem from '../Cart-item/Cart-Item';
import './Cart-DropDown.scss';
import {selectCartItems} from '../../Redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../Redux/cart/cart.actions'
const CartDropdown = ({cartItems, history, dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items' >
      {
        cartItems.length ? 
        (cartItems.map( cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
          )
        )
        ) : (
          <span className='empty-message'>Your Cart Is Empty</span>
        )
      }
    </div>
    <CustomButton 
      onClick={() => {
        history.push('/checkout')  
        dispatch(toggleCartHidden())} } >
          GO TO CHECKOUT
    </CustomButton>
  </div>
);
// const mapStateToProps = ({ cart: { cartItems } }) =>({
// const mapStateToProps = (state) =>({
  const mapStateToProps = createStructuredSelector({

  // cartItems: selectCartItems(state)
    cartItems: selectCartItems

})
export default withRouter(connect(mapStateToProps)(CartDropdown))