import React from 'react';
import Button from './Button'
const Search = props => (
  <div className="search">
    <div className="page-header">
      <h4 className="text-left">Search Bookings</h4>
    </div>
    <div className="row search-wrapper">
      {/* search by Id*/}
      <div className="col">
        <div className="form-group search-box">
          <label htmlFor="customerId">Customer Id</label>
          <div className="search-row">
            <input
              onChange={props.search}
              type="text"
              id="customerId"
              className="form-control"
              placeholder="Customer Id" />
            <Button label='Search by ID'
              searching={props.secondSearching}

            />
          </div>
        </div>
      </div>
      {/* search by name*/}
      <div className="col">
        <div className="form-group search-box">
          <label htmlFor="customerName">Customer Name</label>
          <div className="search-row">
            <input
              onChange={props.search2}
              type="text"
              id="customerName"
              className="form-control"
              placeholder="Customer Name" />
            <Button label='Search by Name'
              searching={props.secondSearching}
            />

          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Search;
