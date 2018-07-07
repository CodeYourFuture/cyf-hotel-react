import React from 'react';
const Button =()=>(
<button className="btn btn-primary fn-submit-name">Search IDs</button>)

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
            <Button/>
          </div>
        </div>
      </div>
    </div>
    <div className="row search-wrapper">
      <div className="col">
        <div className="form-group search-box">
          <label htmlFor="customerId">Customer name</label>
          <div className="search-row">
          
            <input type="text" id="Costomer name" className="form-control" placeholder="Customer name" />
            <Button/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Search;
