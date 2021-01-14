
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
// Reason we can import another name: https://stackoverflow.com/questions/61955294/import-from-default-export-is-the-root-reducer-in-redux-automatically-called
import rootReducer from './root-reducer' // rootReducer is combineReducers
// logger is to help your notice where bugs are
const middlewares = [logger]
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)
