import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncDeleteBill } from '../../actions/actions'
import ShowBill from './ShowBill'

const BillItem = (props) => {
    const [showPopup, setShowPopup] = useState(false)
    const {id, customerInfo, billInfo} = props
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        const confirmDelete = window.confirm('are you sure?')
        if(confirmDelete) {
            dispatch(asyncDeleteBill(id))
        }
        
    }

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    return (<>
        <div class="card mb-3">
                <div class="d-flex justify-content-between p-3">
                    {customerInfo && <div > {customerInfo.name} <span className='sepearator'>|</span>  {customerInfo.mobile} <span className='sepearator'>|</span>{billInfo.date.substr(0,10)}
                    </div>}
                    <div >
                        <button type="button" class="btn btn-primary" onClick={togglePopup} >View</button>
                        <button type="button" class="btn btn-danger mx-3" onClick={() => handleDelete(id)}>Delete</button>
                    </div>
                </div>

            </div>
            { showPopup && <ShowBill togglePopup={togglePopup} customerInfo={customerInfo} billInfo={billInfo}/>}
    </>)
}
export default BillItem