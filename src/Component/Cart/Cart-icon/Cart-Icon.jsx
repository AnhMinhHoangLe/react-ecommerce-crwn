import React from 'react';
import './Cart-Icon.scss'
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg'
import { toggleCartHidden } from "../../Redux/cart/cart.actions";
import {connect} from 'react-redux'
import { selectCartItemsCount } from '../../Redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
const CartIcon = ( { toggleCartHidden, itemCount } ) => (
        <div className='cart-icon'>
                <ShoppingIcon className='shopping-icon' onClick={ toggleCartHidden }/>
                <span className='item-count'>{itemCount}</span>

        </div>
)
const mapDispatchToProps = dispatch => ({
        toggleCartHidden: () => dispatch(toggleCartHidden() )
})
// we dont apply it anymore because it will reset and computed after reload pgae or login logout. No good 
// const mapStateToProps = ({ cart: { cartItems } }) => ({
        // itemCount: cartItems.reduce( 
        //         ( accumulatedQuantity, cartItem ) => accumulatedQuantity + cartItem.quantity, 0)
// const mapStateToProps = (state) => ({
const mapStateToProps = createStructuredSelector({

        // itemCount: selectCartItemsCount(state)
        itemCount: selectCartItemsCount

})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)