import React from 'react'

const StatsItem = ({title, total}) => {
    return (
        <div className='col-md-3'>
            <div className="card mx-2" >
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">{title}</h6>
                    <h5 className="card-title mb-2 ">{total}</h5>
                </div>
            </div>
        </div>
       
    )
}

export default StatsItem