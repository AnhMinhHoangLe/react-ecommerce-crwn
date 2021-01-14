import cartActionTypes from './cart.types'

// this action is to showing the status of hidden cart
export const toggleCartHidden = () => ({
        type: cartActionTypes.TOGGLE_CART_HIDDEN

})

// add item into the array (cart)
export const AddItem = item => ({
        type: cartActionTypes.ADD_ITEM,
        payload: item
})

export const removeItem = item => ({
        type: cartActionTypes.REMOVE_ITEM,
        payload: item
})

export const clearItemFromCart = item => ({
        type: cartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: item
})

