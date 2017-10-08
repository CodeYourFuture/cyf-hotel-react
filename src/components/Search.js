import React from 'react';
import Button from "./Button.js";

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
              <th></th>
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
                <Button name="Search IDs" />
                &nbsp;
                <Button name="Search name" />
              </td>
              {/* Add search by name here */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default Search;
