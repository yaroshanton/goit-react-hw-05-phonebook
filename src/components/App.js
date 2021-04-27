import React, { Component } from 'react'
import ContactEditor from './ContactEditor/ContactEditor'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: ''
    }

    componentDidMount() {
        const persistedTasks = localStorage.getItem('contacts');

        if (persistedTasks) {
            this.setState({
                contacts: JSON.parse(persistedTasks)
            })
        }
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.contacts !== this.state.contacts) {
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
        }
    }



    addContact = ({ name, number }) => {
        const contact = {
            id: uuidv4(),
            name,
            number,
        };

        this.setState(prevState => {
            prevState.contacts.map(obj => {
                if (obj.name === name) {
                    return alert(`${name} is alredy in contacts.`)
                }
            })
            return {
                contacts: [...prevState.contacts, contact]
            }
        })
    }

    removeContact = id => {
        this.setState(prevState => {
            return {
                contacts: prevState.contacts.filter(contact => contact.id !== id)
            }
        })
    }

    changeFilter = filter => {
        this.setState({ filter: filter.target.value })
    }

    getVisibleContacts = () => {
        return this.state.contacts.filter(contact =>
            contact.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase()))
    }

    render() {
        return (
            <>
                <h2>Phonebook</h2>
                <ContactEditor onAddContact={this.addContact} />
                <h2>Contacts</h2>
                <Filter value={this.state.filter} onChange={this.changeFilter} />
                {this.state.contacts.length > 0 &&
                    <ContactList onRemoveContact={this.removeContact} contacts={this.getVisibleContacts()} />}
            </>
        )
    }
}
