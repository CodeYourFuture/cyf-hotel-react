import React from 'react';
import Button from './Button';

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
              {/* Search by ID */ }
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
                <Button label="Search IDs" />
              </td>

              {/* Search by name */ }
              <td>
                <input
                  id="customerName"
                  type="text"
                  className="form-control"
                  placeholder="Customer name"
                  name="customerName"
                />
              </td>
              <td>
                <Button label="Search Names" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default Search;
