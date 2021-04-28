import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import contactsActions from '../../redux/contacts/contacts-actions'


function Filter({ value, onChange }) {
    return (
        <div>
            <p>Find contacts by name</p>
            <input
                type="text"
                value={value}
                onChange={onChange} />
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    value: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);