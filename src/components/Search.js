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
                  onChange = {props.onCustomerIdChange}
                />
              </td>
              <td>
                <Button classStyle={"btn btn-primary fn-submit-name"} searchById={"Search Ids"} onClick={props.searchById} />
              </td>
              <td>
                <input
                  id="customerName"
                  type="text"
                  className="form-control"
                  placeholder="Customer Name"
                  name="customerName"
                  onChange={props.onCustomerNameChange}
                />
              </td>
              <td>
                <Button classStyle={"btn btn-primary fn-submit-name"} searchById={"Search Names"} onClick={props.searchByName} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default Search;
