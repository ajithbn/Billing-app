import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextField  from '../TextField'

const ProductForm = (props) => {
    const { formSubmit, togglePopup, name:productName, price: productPrice, type } = props
    const validate = Yup.object({
        name: Yup.string()
        .required('Name is required'),
        price: Yup.number()
        .required('Price is Number')
    })
    return (
        <div className='popUpWrap'>
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">{`${type === 'add' ? 'Add New Products' : 'Edit Product'}`}</h5>
                    <button type="button" class="btn-close" onClick={togglePopup}></button>
                    </div>
                    <div class="modal-body">
                        <Formik
                            initialValues={{
                                name: productName ? productName : '',
                                price: productPrice ? productPrice : '',
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
                                            <TextField label='Product Name' name='name' type='text'/>
                                            <TextField label='Price' name='price' type='text'/>
                                            <button className='btn btn-dark mt-3' type='submit'>save</button>
                                            {
                                                type === 'add' ? <button class="btn btn-danger mt-3 mx-3" type="reset">Reset</button>
                                                : <button class="btn btn-danger mt-3 mx-3" type="reset" onClick={togglePopup}>Cancel</button>
                                            }
                                            
                                            
                                            {/* {formType === 'addCustomer' ? <button className='btn btn-danger mt-3 mx-3' type='reset'>Reset</button> : <button className='btn btn-danger mt-3 mx-3' type='reset' onClick={togglePopup}>Cancel</button>} */}
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

export default ProductForm