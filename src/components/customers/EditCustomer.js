import React from 'react'
import { useDispatch  } from 'react-redux'
import CustomerForm from './CustomerForm'
import { asyncEditCustomer } from '../../actions/actions'

const EditCustomer = (props) => {
    const {togglePopup, customer} = props

    const dispatch = useDispatch()
    const formSubmit = (formData) => {
        dispatch(asyncEditCustomer(formData, customer._id, togglePopup))
    }
    return (
        <CustomerForm formSubmit={formSubmit} togglePopup={togglePopup} {...customer} formType='editCustomer'/>
    )
}

export default EditCustomer