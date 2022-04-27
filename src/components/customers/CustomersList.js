import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { asyncGetCustomer} from "../../actions/actions";

import CustomerItem from "./CustomerItem";
import AddCustomer from "./AddCustomer";
import Pagination from "../Pagination";
import {filterBySearch } from "../../selectors/search";
import sortBy from '../../selectors/sortBy'

import loading from '../../assets/img/loading.gif'

const CustomersList = (props) => {
  const [showPopup, setshowPopup] = useState(false);
  const [searchBox, setSearchBox] = useState('')
  const [orderBy, setOrderBy] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [postsperPage, setPostsPerPage] = useState(5)

  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(asyncGetCustomer());
  }, []);

  const customers = useSelector((state) => {
    return state.storeData.customers.data;
  });

  const customersIsLoading = useSelector((state) => {
    return state.storeData.customers.loading;
  });

  

  const filteredData = filterBySearch(customers, searchBox, 'customers')

  //Get CurrentPosts
  const indexofLastpost = currentPage * postsperPage
  const indexofFirstPost = indexofLastpost - postsperPage
  const currentPosts = filteredData.slice(indexofFirstPost, indexofLastpost)

  
  const togglePopup = () => {
    setshowPopup(!showPopup);
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value
    setSearchBox(searchTerm)
  }
  const handleOrderChange = (e) => {
      const slectedVal = e.target.value
      setOrderBy(slectedVal)
      sortBy(customers, slectedVal, 'customers' )
  }

  //filtered Customer
  

  //Paginate 
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div className="p-3 ">
      <div className="d-flex align-items-center justify-content-between ">
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input
            type="search"
            className="form-control"
            placeholder="Search customer By Name..."
            aria-label="Search"
            value={searchBox}
            onChange={handleSearch}
          />
        </form>
        <select
          className="form-select form-select-sm w-25"
          aria-label=".form-select-sm example"
          value={orderBy}
          onChange={handleOrderChange}
        >
          <option selected="">Order Customer By</option>
          <option value="ascending">Name- Ascending</option>
          <option value="descending">Name - Descending</option>
        </select>

        <button type="button" className="btn btn-primary" onClick={togglePopup}>
          Add Customer
        </button>
      </div>
      {showPopup && (
        <AddCustomer togglePopup={togglePopup} />
      )}

      <div className="my-3">
        <h2>Listing Customes - {filteredData.length}</h2>
      </div>
      {
        customersIsLoading ? <div className="w-100 d-flex justify-content-center"><img src={loading} width={100} height={100} className='my-2'/></div> : (filteredData.length > 0 ? (
          (searchBox.length > 0 ? filteredData : currentPosts)
          .map((customer) => {
            return <>
                      <CustomerItem customer={customer} key={customer._id} />
                      
                    </>
          })
        ) : (<p>No record Found</p>))
        
      }
      {filteredData.length > 0 && <Pagination postsPerPage={postsperPage}  totalPosts={filteredData.length} paginate={paginate}/> }
    </div>
  );
};
export default CustomersList;
