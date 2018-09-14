import React from 'react';
import ButtonSearch from './Button';

const Search = () => (
  <div className="search">
    <div className="page-header">
      <h4 className="text-left">Search Bookings</h4>
    </div>
    <div className="row search-wrapper">
      <div className="col">
        <div className="form-group search-box">
          <label htmlFor="customerId">Customer Id</label>
          <div className="search-row">
            <input type="text" id="customerId" className="form-control" placeholder="Customer Id" />
            <ButtonSearch id="Search Ids" />
          </div>
        </div>
      </div>
    </div>
    <div className="row search-wrapper">
      <div className="col">
        <div className="form-group search-box">
          <label htmlFor="customerId">Customer Name</label>
          <div className="search-row">
            <input type="text" id="customerId" className="form-control" placeholder="Customer Name" /> 
            <ButtonSearch name="Search Names" />
          </div>
        </div>
      </div>
    </div>
  </div>
);



// const ButtonSearch = (
//   <button className="btn btn-primary fn-submit-name">
//   Search {(itemsName)}
//   </button> 
// );

export default Search;
