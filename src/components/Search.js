import React, {Component } from 'react';
import SearchButton from "./SearchButton.js";
import CustomersTable from "./CustomersTable.js";

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
              <th>Customer Name</th>
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
                id="searchByName"
                type="text"
                className="searchByName"
                placeholder="Seach by name"
                name="searchByName"
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
    <CustomersTable />
  </div>
);
export default Search;
