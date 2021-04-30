import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import actions from '../contacts/contacts-actions'

const initialItems = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

const items = createReducer(initialItems, {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.removeContact]: (state, { payload }) => state.filter(contact => contact.id !== payload)
})

// const items = (state = initialItems, { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             state.map(item => {
//                 if (payload.name === item.name) {
//                     return alert(`${item.name} is already in contacts.`)
//                 } else {
//                     return [...state, payload]
//                 }
//             })

//         case types.DELETE:
//             return state.filter(contact => contact.id !== payload)

//         default:
//             return state;
//     }
// }


const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
})

// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.CHANGE_FILTER:
//             return payload;

//         default:
//             return state;
//     }
// }

export default combineReducers({
    items,
    filter
})