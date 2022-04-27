import React from 'react'
import ProductForm from './ProductForm'
import { useDispatch } from 'react-redux'
import { asyncAddProduct } from '../../actions/actions'

const AddProduct = (props) => {
    const dispatch = useDispatch()

    const { togglePopup } = props

    const formSubmit = (formData) => {
        dispatch(asyncAddProduct(formData,togglePopup))
    }
    return (<div>
        <ProductForm formSubmit={formSubmit} togglePopup={togglePopup} type='add'/>
    </div>)
}

export default AddProduct