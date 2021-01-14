// contains all of the code related to all the states in our application
//in one file
import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
        key: 'root',
        storage,
        whiteList: ['cart']
}
// combineReducers will combine all Dispatchers and State to come out new result/ state, so that the new state can update to  view 
const rootReducer = combineReducers({
        user: userReducer,
        cart: cartReducer,
        directory: directoryReducer,
        shop: shopReducer
})
// or  export default combineReducers({ user: userReducer })
export default persistReducer(persistConfig, rootReducer)
