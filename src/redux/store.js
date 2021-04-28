import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './contacts/contact-reducer'

const rootReducer = combineReducers({
    contacts: contactReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;