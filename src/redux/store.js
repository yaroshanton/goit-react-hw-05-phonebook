import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './contacts/contact-reducer'

const rootReducer = combineReducers({
    contacts: contactReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;