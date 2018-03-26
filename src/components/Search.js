import React from 'react';
import Btn from "./Btn.js";

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
              <Btn 
              toggle= {props.toggle} 
              button = "Search IDs"
              />
              {/* Add search by name here */}  
              <td>
                <input
                  id="customerId"
                  type="text"
                  className="form-control"
                  placeholder="Customer name"
                  name="customerName"
                />
              </td>
              <Btn 
              toggle= {props.toggle }
              button = "Search Names" 
              />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default Search;
