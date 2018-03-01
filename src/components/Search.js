import React from 'react';
import Button from './Button';
import Results from './Results'

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
                <Button label="Ids" onClick={()=>{console.log("Id button")}} />
              </td>



              {/* Add search by name here */}

            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <table className="table search-table">
          <thead>
            <tr>
              <th>Search by name</th>
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
                  placeholder="search by name"
                  name="customerId"
                />
              </td>
              <td>
                <Button label="by name" onClick={()=>{console.log("Hi id!")}}/>
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
