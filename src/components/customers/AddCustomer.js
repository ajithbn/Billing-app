import React from 'react'
import CustomerForm from './CustomerForm'
import { useDispatch } from 'react-redux'
import { asyncAddCustomer } from '../../actions/actions'

const AddCustomer = (props) => {
    const { togglePopup } = props
    const dispatch = useDispatch()
    const formSubmit = (formData) => {
        dispatch(asyncAddCustomer(formData, togglePopup));
        //alert('hi')
    };
    return (
        <CustomerForm formSubmit={formSubmit} togglePopup={togglePopup} formType='addCustomer'/>
    )
}
export default AddCustomer