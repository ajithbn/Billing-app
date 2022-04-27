import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PrintBill from './PrintBill'
import { getCustomerinfoById } from '../../selectors/getInfoById'

const BillDetail = (props) => {
    const billid = props.match.params.id

    const userInfo = useSelector((state) => {
        return state.storeData.users.data
    })

    const productInfo = useSelector((state) => {
        return state.storeData.products.data
    })

    const customerInfo = useSelector((state) => {
        return state.storeData.customers.data
    })

    const billData = useSelector((state) => {
        return state.storeData.bills.data
    })

    const billinfo = billData.find((bill) => {
        return bill._id === billid
    })
    
    return (<div className='p-3'>
        {billinfo && <PrintBill userInfo={userInfo} productInfo={productInfo}  customerInfo={getCustomerinfoById(billinfo.customer,customerInfo)} billInfo={billinfo}/>}
        </div>
    )
}

export default BillDetail