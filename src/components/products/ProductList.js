import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetProducts } from "../../actions/actions";
import ProductItem from "./ProductItem";
import AddProduct  from '../products/AddProducts'
import {filterBySearch } from '../../selectors/search'
import sortBy from '../../selectors/sortBy'
import Pagination from "../Pagination";

const ProductList = (props) => {
  const [searchBox, setSearchBox] = useState("");
  const [orderBy, setOrderBy] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsperPage, setPostsPerPage] = useState(2)

  const products = useSelector((state) => {
    return state.storeData.products.data;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetProducts());
  }, []);

  const handleSearch = (e) => {
      const inputVal = e.target.value
      setSearchBox(inputVal)
  }

  const handleOrderChange = (e) => {
      const inputVal = e.target.value
      setOrderBy(inputVal)
      sortBy(products, inputVal, 'products' )

  }

  const filtedData = filterBySearch(products, searchBox, 'products')

  //popupToggle
  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  //Get CurrentPosts
  const indexofLastpost = currentPage * postsperPage
  const indexofFirstPost = indexofLastpost - postsperPage
  const currentPosts = filtedData.slice(indexofFirstPost, indexofLastpost)

  //Paginate 
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="p-3">
      <div className="d-flex align-items-center justify-content-between ">
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input
            type="search"
            class="form-control"
            placeholder="Search customer By Name..."
            aria-label="Search"
            value={searchBox}
            onChange={handleSearch}
          />
        </form>
        <select
          class="form-select form-select-sm w-25"
          aria-label=".form-select-sm example"
          value={orderBy}
          onChange={handleOrderChange}
        >
          <option selected="">Order Products By</option>
          <option value="ascending">Name- Ascending</option>
          <option value="descending">Name - Descending</option>
        </select>

        <button type="button" class="btn btn-primary" onClick= {togglePopup}>
          Add Product
        </button>
        {showPopup && <AddProduct togglePopup={togglePopup}/>}
      </div>
      <div className="my-3">
        <h2>Product List- {filtedData.length}</h2>
      </div>
      {filtedData.length > 0 ? (
        (searchBox.length > 0 ? filtedData : currentPosts ).map((product) => {
          return <ProductItem product={product} />;
        })
      ) : (
        <p>No record found</p>
      )}
      {filtedData.length > 0 && <Pagination postsPerPage={postsperPage}  totalPosts={filtedData.length} paginate={paginate}/> }
    </div>
  );
};
export default ProductList;
