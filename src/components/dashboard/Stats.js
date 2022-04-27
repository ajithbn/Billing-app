import React from 'react'
import StatsItem from './StatsItem'
import { useSelector } from 'react-redux'

const Stats = (props) => {
    const customers = useSelector((state) => {
        return state.storeData.customers.data
    })

    const products = useSelector((state) => {
        return state.storeData.products.data
    })

    const bills = useSelector((state) => {
        return state.storeData.bills.data
    })
    const totalRevenue = bills.reduce((prevVal, currentVal) => {
        return prevVal + currentVal.total
    }, 0)
    const today = new Date()
    const todaysbills = bills.filter((bill) => {
        return bill.date.substr(0, 10) == today.toISOString().substr(0,10)
    })

    const todayRevenue = todaysbills.reduce((prevVal, currentVal) => {
        return prevVal + currentVal.total
    }, 0)
    return (<div>
        <h2>Stats</h2>
        <div className='d-flex'>
            <StatsItem title='Customers' total={customers.length}/>
            <StatsItem title='Products' total={products.length}/>
            <StatsItem title='Total Revenue' total={totalRevenue}/>
            <StatsItem title='Income for Today' total={todayRevenue}/>
        </div>
        
    </div>)
}

export default Stats