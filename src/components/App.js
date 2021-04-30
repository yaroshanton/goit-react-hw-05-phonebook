import React, { Component } from 'react'
import ContactEditor from './ContactEditor/ContactEditor'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'



export default class App extends Component {
    render() {
        return (
            <>
                <h2>Phonebook</h2>
                <ContactEditor />
                <h2>Contacts</h2>
                <Filter />
                <ContactList />
            </>
        )
    }
}
