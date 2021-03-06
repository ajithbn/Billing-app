import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { getCustomerinfoById } from '../../selectors/getInfoById'

const TopStats = (props) => {
    const customerData = useSelector((state) => {
        return state.storeData.customers.data
    })

    const productData = useSelector((state) => {
        return state.storeData.products.data
    })

    const billData = useSelector((state) => {
        return state.storeData.bills.data
    })
    return (<div className='my-5'>
        <h2 className='my-2'>Recent 5</h2>
        <div className="d-flex">
            <div className="col-md-4">
                <div className="card mx-2">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">last 5 Customers</h6>
                        <ul>
                            {
                                customerData.slice(-5).reverse().map((customer) => {
                                    return <li key={customer._id}>{customer.name}</li>
                                })
                            }
                         </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mx-2">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">last 5 Products</h6>
                        <ul>
                            {
                                productData.slice(-5).reverse().map((product) => {
                                    return <li key={product._id}>{product.name}</li>
                                })
                            }
                         </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mx-2">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">last 5 Bills</h6>
                        {billData.length > 0 ? <ul>
                            {
                                billData.slice(-5).reverse().map((bill) => {
                                    return <li key={bill._id}>{bill.date.substr(0,10)} {getCustomerinfoById(bill.customer, customerData).name} - {bill.total}</li>
                                })
                            }
                         </ul> : 'no record found'}
                    </div>
                </div>
            </div>
       </div>

    </div>)
}

export default TopStats