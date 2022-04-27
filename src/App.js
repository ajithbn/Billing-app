import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/dashboard/Dashboard';
import CustomersList from './components/customers/CustomersList';
import Products from './components/products/ProductList';
import Bills from './components/Bills/BillLists';
import Profile from './components/Profile';
import PrivateRoute from './selectors/PrivateRoute';
import { asyncGetProfile, asyncGetCustomer, asyncGetProducts, asyncGetBills } from './actions/actions'
import BillDetail from './components/Bills/BillDetail';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
      if(localStorage.getItem('token')) {
        
        dispatch(asyncGetProfile())
        dispatch(asyncGetCustomer())
        dispatch(asyncGetProducts())
        dispatch(asyncGetBills())
      }
  }, [])
  return (
    <div className='d-flex'>
      <div >
          <NavBar />
          
      </div>
      <div className='w-100'>
        <Route path="/" component={Home} exact />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/customers" component={CustomersList} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/bills" component={Bills} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/billdetails/:id" component={BillDetail} exact/>
      </div>
    </div>
  );
}

export default App;
