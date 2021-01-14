import React from 'react';
import './Checkout.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems,selectCartItemsTotal} from '../Redux/cart/cart.selectors'
import CheckoutItem from './Checkout-Item/CheckoutItem'
import StripeCheckout from '../Stripe-button/stripeButton'
import StripeCheckoutButton from '../Stripe-button/stripeButton';
const CheckoutPage = ({cartItems, total}) =>
(                
        <div className='checkout-page'>
                <div className='checkout-header'>
                        <div className='header-block'>
                                <span> Product</span>
                        </div>
                           <div className='header-block'>
                                <span> Description</span>
                        </div>
                           <div className='header-block'>
                                <span> Quantity</span>
                        </div>
                           <div className='header-block'>
                                <span>Price </span>
                        </div>
                           <div className='header-block'>
                                <span> Remove</span>
                        </div>
                </div>
                { cartItems.map(cartItem => (
                               <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                                ))
                }

                <div className='total'>
                        <span>TOTAL: ${total}</span>
                </div>
                <div className='test-warning'>*Please use the following test credit cart for payments*
                <br/>
                4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
                </div>
                
                <StripeCheckoutButton price={total} />
        </div>
)        
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems, 
    total: selectCartItemsTotal, 
})

export default connect(mapStateToProps)(CheckoutPage)