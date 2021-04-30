import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/Add', ({ name, number }) => ({
    payload: {
        id: uuidv4(),
        name,
        number,
    }
}))

const removeContact = createAction('contacts/Delete');
const changeFilter = createAction('contacts/ChangeFilter');

// const addContact = ({ name, number }) => ({
//     type: types.ADD,
//     payload: {
//         id: uuidv4(),
//         name,
//         number,
//     }
// })

// const removeContact = id => ({
//     type: types.DELETE,
//     payload: id
// })

// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value
// })

// eslint-disable-next-line
export default { addContact, removeContact, changeFilter };