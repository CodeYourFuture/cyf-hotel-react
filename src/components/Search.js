import React from 'react';
import {component} from 'react';
const Button =() =>(<button className="btn btn-primary fn-submit-name">Search friend </button>

);

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
            <label htmlFor="customer friend">Customer friend</label>
          <div className="search-row">
            <input type="text" id="customer friend " className="form-control" placeholder="Customer friend" />
           <Button/>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default Search;
