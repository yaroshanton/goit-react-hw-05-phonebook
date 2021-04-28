import React from 'react'
import PropTypes from 'prop-types'
import './ContactList.css'
import { connect } from 'react-redux'
import contactsActions from '../../redux/contacts/contacts-actions'


const ContactList = ({ contacts, onRemoveContact }) => (
    <>
        <ul className="nameList">
            {contacts.map(contact => (
                <li key={contact.id}>
                    <p>{contact.name}: {contact.number}<button type="button" className="buttonNameList" onClick={() => onRemoveContact(contact.id)}>Delete</button></p>

                </li>
            ))}
        </ul>
    </>
)

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired
}

const getVisibleContacts = (items, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return items.filter(({ name }) =>
        name.toLocaleLowerCase().includes(normalizedFilter))

}

const mapStateToProps = state => {
    const { filter, items } = state.contacts;
    const visibleContacts = getVisibleContacts(items, filter)

    return {
        contacts: visibleContacts
    }
}

const mapDispatchToProps = dispatch => ({
    onRemoveContact: id => dispatch(contactsActions.removeContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);