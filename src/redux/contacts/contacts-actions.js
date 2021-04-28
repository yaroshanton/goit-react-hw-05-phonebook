import types from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => ({
    types: types.ADD,
    payload: {
        id: uuidv4(),
        name,
        number,
    }
})

export default { addContact };