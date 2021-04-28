import { combineReducers } from "redux";
import types from './contacts-types'

const items = (state = [], { type, payload }) => {
    switch (type) {
        case types.ADD:
            state.map(obj => {
                // eslint-disable-next-line no-restricted-globals
                if (obj.name === name) {
                    // eslint-disable-next-line no-restricted-globals
                    return alert(`${name} is alredy in contacts.`)
                } return {
                    contacts: [...state, payload]
                }
            })


        default:
            return state;
    }
}

const filter = (state = '', actions) => {
    return state;
}

export default combineReducers({
    items,
    filter
})