import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { asyncDeleteProduct } from '../../actions/actions'
import EditProduct from './EditProducts'

const ProductItem = (props) => {
    const [showPopup, setShowPopup] = useState(false)
    const { product } = props

    const dispatch = useDispatch()

    const handleDelete = () => {
        const confirmDelete = window.confirm('Are you sure?')
        if(confirmDelete) {
            //alert(_id)
            dispatch(asyncDeleteProduct(product._id))  
        }
    }

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }
    return (<>
            <div class="card mb-3">
                <div class="d-flex justify-content-between p-3">
                    <div >
                        {product.name} - {product.price}
                    </div>
                    <div >
                        <button type="button" class="btn btn-primary" onClick={togglePopup}>Edit</button>
                        <button type="button" class="btn btn-danger mx-3" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
            { showPopup && <EditProduct togglePopup={togglePopup} product={product}/>}
        </>)
}

export default ProductItem