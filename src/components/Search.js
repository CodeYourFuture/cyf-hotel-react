import React from 'react';
import SearchButton from './Searchbutton'

const Search = props => (
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
            <SearchButton searchbut = "Search IDs" />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="form-group search-box">
          <label htmlFor="customername">Customer name</label>
          <div className="search-row">
            <input type="text" id="customername" className="form-control" placeholder="Customer name" />
            <SearchButton searchbut = "Search Names"/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Search;
