import React from 'react';
import SearchButtonL from './SearchButtonL.js';
import SearchButtonR from './SearchButtonR.js'; 


const Search = props => (
  <div className="search">
    <div className="page-header">
      <h4 className="text-left">Search Bookings</h4>
    </div>
    <div className="row">
      <div className="col">
        <table className="table search-table">
          <thead>
            <tr>
              <th>Customer id</th>
              <th />
              <th>Customer name</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  id="customerId"
                  type="text"
                  className="form-control"
                  placeholder="Customer id"
                  name="customerId"
                />
              </td>
              <td>
                <SearchButtonL />
              </td>
              <td>
                <input
                  id="customerName"
                  type="text"
                  className="form-control"
                  placeholder="Customer name"
                  name="customername"
                />
              </td>
              <td>
                <SearchButtonR />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>   
  </div>
);
export default Search;
