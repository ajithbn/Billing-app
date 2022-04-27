import React from 'react'
import Stats from './Stats'
import TopStats from './TopStats'
import StatsBar from './StatsBar'

const Dashboard = (props) => {
    
    return (
        <div className='p-5'>
            <StatsBar />
            <Stats />
            <TopStats />
            
        </div>
    )
}
export default Dashboard