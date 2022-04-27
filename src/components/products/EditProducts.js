import React from 'react'
import ProductForm from './ProductForm'
import { useDispatch } from 'react-redux'
import { asyncUpdateProduct } from '../../actions/actions'

const EditProduct = (props) => {
    const { togglePopup, product} = props

    const dispatch = useDispatch()
    const formSubmit = (formData) => {
        dispatch(asyncUpdateProduct(formData, product._id, togglePopup))
    }
    return (<ProductForm formSubmit={formSubmit} togglePopup={togglePopup} {...product}/>)
}

export default EditProduct