import React, { useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import {
    LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const StatsBar = (props) => {

    const bills = useSelector((state) => {
        return state.storeData.bills.data
    })
    
    const [chartData, setChartData] = useState([])
    

    useEffect(() => {
        const result = bills.slice(-7).reverse().map((ele) => {
            return { date: ele.date.slice(0, 10), total: ele.total }
        })
        setChartData(result)
    }, [bills])
    


    const result = chartData.reduce((accumulator, cur) => {
        let date = cur.date;
        let found = accumulator.find(elem => elem.date == date)
        if (found) found.total += cur.total;
        else accumulator.push(cur);
        return accumulator;
    }, []);

    return (<div>
        <h2>Last 7 days Stats</h2>
        <ResponsiveContainer width={'100%'} height={400}>
            <LineChart data={result}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line dataKey="total" fill="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
        </div>)
}

export default StatsBar