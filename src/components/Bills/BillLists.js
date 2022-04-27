import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BillItem from "./BillItem";
import AddBill from "./AddBill";
import { getCustomerinfoById } from '../../selectors/getInfoById'
import { getBillSearch } from '../../selectors/search'
import Pagination from "../Pagination";
import sortBy from "../../selectors/sortBy";
const Bills = (props) => {
  const [showPopup, setShowPopup] = useState(false)
  const [searchBox, setSearchBox] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [postsperPage, setPostsPerPage] = useState(5)
  const [orderBy, setOrderBy] = useState('')

  const dispatch = useDispatch();
  const billsData = useSelector((state) => {
      return state.storeData.bills.data;
  });

  const customersData = useSelector((state) => {
    return state.storeData.customers.data;
  });

  

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const togglePopup = () => {
      setShowPopup(!showPopup)
  }

  const handleSearch = (e) => {
    setSearchBox(e.target.value)
  }
  const filteredData = getBillSearch(customersData, billsData, searchBox)
    
  //Get CurrentPosts
  const indexofLastpost = currentPage * postsperPage
  const indexofFirstPost = indexofLastpost - postsperPage
  const currentPosts = filteredData.slice(indexofFirstPost, indexofLastpost)

  const handleOrderChange = (e) => {
    const slectedVal = e.target.value
    setOrderBy(slectedVal)
    sortBy(customersData, slectedVal, 'bills' )
  }
  return (
    <>
      <div className="p-3">
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
            onChange={handleOrderChange}
          >
            <option selected="">Order Products By</option>
            <option value="ascending">Name- Ascending</option>
            <option value="descending">Name - Descending</option>
          </select>

          <button type="button" className="btn btn-primary" onClick={togglePopup}>
            Add Bill
          </button>
          {showPopup && <AddBill togglePopup={togglePopup} {...props}/>}
        </div>
        <div className="my-3">
          <h2>Bill Lists- {filteredData.length}</h2>
        </div>
        {filteredData.length > 0 ? (
          (searchBox.length > 0 ? filteredData : currentPosts).map((bill) => {
            return <BillItem key={bill._id} billInfo={bill} customerInfo={getCustomerinfoById(bill.customer, customersData)} id={bill._id}/>;
          })
        ) : (
          <p>No record found</p>
        )}
        {filteredData.length > 0 && <Pagination postsPerPage={postsperPage}  totalPosts={filteredData.length} paginate={paginate}/> }
      </div>
    </>
  );
};
export default Bills;
