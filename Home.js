import React from "react";
import { useSelector } from "react-redux";
import GoogleChart from "./GoogleChart ";
const Home = (props) => {
    const state = useSelector((state) => {
        return state
    })
    const incomeOfTheDay = () => {
        const bills = state.bills.data
        const todayBills = bills.filter(ele => ele.date.slice(0, 10) === new Date().toISOString().slice(0, 10))
        return todayBills.length > 0 ? todayBills.reduce((a, b) =>{return a+b.total},0): 0
    }
    const recentArr = (arr) => {
        return (arr.slice(-5).reverse())
    }
    return (
        Object.keys(state.user.data).length > 0 ?

            <div className="row mb-4 ">
                
                <div className="col-md-3 ">
                    <div className="card bg-light  rounded shadow " >
                        <div className="card-header " ><h1>{state.customers.data.length}</h1>
                        </div>
                        <div className="card-body rounded" style={{ backgroundColor: '#1F2833', color: '#66FCF1', textAlign: 'center' }}>
                            <div className="card-title" ><h3>Total Customers</h3></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-light  rounded shadow" >
                        <div className="card-header "><h1>{state.bills.data.length}</h1>
                        </div>
                        <div className="card-body rounded " style={{ backgroundColor: '#1F2833', color: '#66FCF1', textAlign: 'center' }}>
                            <div className="card-title"><h3>Total Bills</h3></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-light rounded shadow" >
                        <div className="card-header" ><h1>{incomeOfTheDay()}</h1>
                        </div>
                        <div className="card-body rounded" style={{ backgroundColor: '#1F2833', color: '#66FCF1', textAlign: 'center' }}>
                            <div className="card-title" ><h3>Today's Income</h3></div>
                        </div>
                    </div>
                </div>
               
                <div className="col-md-3">
                    <div className="card bg-light  rounded shadow" >
                        <div className="card-header" ><h1>{state.products.data.length}</h1>
                        </div>
                        <div className="card-body rounded" style={{ backgroundColor: '#1F2833', color: '#66FCF1', textAlign: 'center' }}>
                            <div className="card-title "><h3>Total Products</h3></div>
                        </div>
                    </div>
                </div>
                <div>
                    <GoogleChart />
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 ">
                        <div className="card bg-light  rounded shadow " >
                            {
                                recentArr(state.products.data).map((ele, i) => {
                                    return (
                                        <div className="card-header rounded" key={i}><h5>{i + 1}.{ele.name}</h5></div>
                                    )
                                })
                            }
                            <div className="card-body rounded" style={{ backgroundColor: '#1F2833', color: '#66FCF1', textAlign: 'center' }}>
                                <div className="card-title" ><h3>Recent Products</h3></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="card bg-light  rounded shadow " >
                            {
                                recentArr(state.customers.data).map((ele, i) => {
                                    return (
                                        <div className="card-header rounded" key={i}><h5>{i + 1}.{ele.name}</h5></div>
                                    )
                                })
                            }

                            <div className="card-body rounded" style={{ backgroundColor: '#1F2833', color: '#66FCF1', textAlign: 'center' }}>
                                <div className="card-title" ><h3>Recent Customers</h3></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            :
            <h1>Please Login</h1>
    )
}
export default Home