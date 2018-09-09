import React from 'react';
import Buttton from './Button'
const Search = ({search}) => (
  <div className="search">
    <div className="page-header">
      <h4 className="text-left">Search Bookings</h4>
    </div>
    <div className="row search-wrapper">
      <div className="col">
        <div className="form-group search-box">
          <label htmlFor="customerId">Customer Id</label>
          <div className="search-row">
            <input
              type="text"
              id="customerId"
              className="form-control"
              placeholder="Customer Id"
            />
            <Buttton label="Search IDs" search= {search}/>
          </div>
        </div>
      </div>
      {/* search by name*/}
      <div className="col">
        <div className="form-group search-box">
          <label htmlFor="customerName">Customer Name</label>
          <div className="search-row">
            <input
              type="text"
              id="customerName"
              className="form-control"
              placeholder="Customer Name"
            />
            <Buttton label="Search Name" search={search}/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Search;
