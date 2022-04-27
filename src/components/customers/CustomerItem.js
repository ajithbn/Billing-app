import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { asyncDeleteCustomer } from '../../actions/actions'
import EditCustomer from './EditCustomer'

const CustomerItem = (props) => {
    const [showPopup, setShowPopup] = useState(false)
    const { customer } = props
    const togglePopup = () => setShowPopup(!showPopup)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(asyncDeleteCustomer(id))
    }
    return (
        <>
            <div className="card mb-3">
                <div className="d-flex justify-content-between p-3">
                    <div >
                        {customer.name} - {customer.mobile} - {customer.email}
                    </div>
                    <div >
                        <button type="button" className="btn btn-primary" onClick={togglePopup}>Edit</button>
                        <button type="button" className="btn btn-danger mx-3" onClick={() => handleDelete(customer._id)}>Delete</button>
                    </div>
                </div>
            </div>
            { showPopup &&<EditCustomer togglePopup={togglePopup} customer={customer}/> }
        </>
    )
}

export default CustomerItem