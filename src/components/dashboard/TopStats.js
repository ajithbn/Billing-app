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
        <div class="d-flex">
            <div class="col-md-4">
                <div class="card mx-2">
                    <div class="card-body">
                        <h6 class="card-subtitle text-muted">last 5 Customers</h6>
                        <ul>
                            {
                                customerData.slice(-5).reverse().map((customer) => {
                                    return <li>{customer.name}</li>
                                })
                            }
                         </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mx-2">
                    <div class="card-body">
                        <h6 class="card-subtitle text-muted">last 5 Products</h6>
                        <ul>
                            {
                                productData.slice(-5).reverse().map((product) => {
                                    return <li>{product.name}</li>
                                })
                            }
                         </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mx-2">
                    <div class="card-body">
                        <h6 class="card-subtitle text-muted">last 5 Bills</h6>
                        {billData.length > 0 ? <ul>
                            {
                                billData.slice(-5).reverse().map((bill) => {
                                    return <li>{bill.date.substr(0,10)} {getCustomerinfoById(bill.customer, customerData).name} - {bill.total}</li>
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