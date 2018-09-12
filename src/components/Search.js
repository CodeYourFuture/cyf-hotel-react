import React from 'react';
import Button from './button.js'
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
           <Button text ="customer Id"/>
          </div>
          <div className="search-row">
            <input type="text" id="customerId" className="form-control" placeholder="Customer name" />
           <Button text = "customer name"/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Search;
