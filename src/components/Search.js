import React from 'react';
import Button from './Button.js'
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
            <input
              type="text"
              value={props.customerIdInput}
              onChange={props.customerInputChange}
              id="customerId" className="form-control"
              placeholder="Customer Id" />
            <Button displayText="Search customerId" search={props.filteredCustomerId} />
          </div>
          <div className="search-row">
            <input type="text"
              value={props.customerNameInput}
              onChange={props.customerNameInputChange}
              id="customerId" className="form-control"
              placeholder="Search Booking by name" />
            <Button displayText="Search by name" search={props.filteredCustomerName} />

          </div>
          {/* <br/>
          <div>
             
            <button onClick={this.resultCounterChange} id="click-me">Click me!</button>
          </div> */}
          
        </div>
      </div>
    </div>
  </div>
);

export default Search;