import React from 'react';
import Button from './Button';
import Results from './Results';

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
              <th>Search by name</th>
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
                <Button label="Ids" handleClick={props.handleSearchId} />
              </td>

              <td>
                <input
                  id="customerId"
                  type="text"
                  className="form-control"
                  placeholder="search by name"
                  name="customerId"
                />
              </td>
              <td>
                <Button label="by name" handleClick={props.handleSearchName} />
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>




  </div>
);

export default Search;
