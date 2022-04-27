import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from '../actions/actions'
const NavBar = (Props) => {
  const store = useSelector((state) => {
    return state.storeData
  })
  const dispatch = useDispatch()
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-full"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        { !store.isAuthenticated ? (<>
          <li className="nav-item"> <Link to="/" className="nav-link active" aria-current="page"> Home </Link></li>
        <li> <Link to="/register" className="nav-link text-white">Register</Link></li>
        <li><Link to="/login" className="nav-link text-white">Login</Link></li>
        </>) : (
          <>
          <li><Link to="/dashboard" className="nav-link text-white"> Dashboard </Link></li>
          <li><Link to="/customers" className="nav-link text-white"> Customers</Link></li>
          <li><Link to="/products" className="nav-link text-white">Products</Link></li>
          <li><Link to="/bills" className="nav-link text-white">Bills </Link></li>
          <li><Link to="/profile" className="nav-link text-white">Profile</Link></li>
          <li><Link to="/" className="nav-link text-white" onClick={() => {
              dispatch(userLogout())
            }}>Logout </Link>
          </li>
      </>
        )}
      </ul>
      <hr />
      
    </div>
  );
};

export default NavBar;
