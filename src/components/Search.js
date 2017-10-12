import React from 'react';
// import Button from './Button'
import SearchFunction from './SearchFunction';

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
              <SearchFunction search={props.search} inputId="customer id" inputType="text" inputClassName="form-control" inputPlaceholder="Customer id" inputName="customerId"/>
              <SearchFunction search={props.search} inputId="customer name" inputType="text" inputClassName="form-control" inputPlaceholder="Customer name" inputName="customerName"/>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default Search;
