import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextField  from '../TextField'
const CustomerForm = (props) => {
    const { formSubmit, togglePopup, name:customerName, mobile: customerNumber, email: customerMail, formType  } = props
    const validate = Yup.object({
        name: Yup.string()
        .required('Name is required'),
        mobile: Yup.number()
        .required('Mobile is Number'),
        email:Yup.string()
        .email('email is invalid')
        .required('email is required')
    })

    
    return (
        <div className='popUpWrap'>
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">{ formType === 'addCustomer' ? 'Add New Customer' : 'Edit Customer'}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={togglePopup}></button>
                    </div>
                    <div class="modal-body">
                        <Formik
                            initialValues={{
                                name: customerName ? customerName : '',
                                mobile: customerNumber ? customerNumber : '',
                                email: customerMail ? customerMail : '',
                        }}
                        validationSchema = {validate}
                        onSubmit = { values => {
                            formSubmit(values)
                        }}
                        >
                            {
                                formik => (
                                    <div className=''>
                                        <Form>
                                            <TextField label='Name' name='name' type='text'/>
                                            <TextField label='Mobile' name='mobile' type='text'/>
                                            <TextField label='Email' name='email' type='email'/>
                                            <button className='btn btn-dark mt-3' type='submit'>save</button>
                                            
                                            {formType === 'addCustomer' ? <button className='btn btn-danger mt-3 mx-3' type='reset'>Reset</button> : <button className='btn btn-danger mt-3 mx-3' type='reset' onClick={togglePopup}>Cancel</button>}
                                        </Form>
                                    </div>
                                )
                            }
                        </Formik>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default CustomerForm