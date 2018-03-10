import React from 'react';
import SearchButton from './SearchButton';
import Customers from './Customers';
import SearchLabel from './SearchLabel';
import SearchInput from './SearchInput';

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
              <SearchLabel labelHead='Customer ID' />
              <th />
              <SearchLabel labelHead='Customer Name' />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
                <SearchInput name='customerId' placeholder='Customer Id' />
              <td>
                <SearchButton />
              </td>
                <SearchInput name='customerName' placeholder='Customer name' />
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
        <Customers />
      </div>
    </div>
  </div>
);
export default Search;
