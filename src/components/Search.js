import React from 'react';
import { SearchButton } from './SearchButton';
import { CustomersTable } from './custTable.js';

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
                <SearchButton />
              </td>
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
                <SearchButton />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <CustomersTable />
      </div>
    </div>
  </div>
);
export default Search;
