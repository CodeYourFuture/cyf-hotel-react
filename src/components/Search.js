import React from 'react';
import Button from './button'
import Input from './input'

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
                <Input
                  id="customerId"
                  placeholder="customer Id"
                  name="customerId"
                />
              </td>
              <td>
                <Button text="search Id" search = {props.search}/>
              </td>
            </tr>
            <tr>
              <td>
                <Input
                  id="customerName"
                  placeholder="customer Name"
                  name="customerName"
                />
              </td>
              <td>
                <Button text="search Name" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default Search;
