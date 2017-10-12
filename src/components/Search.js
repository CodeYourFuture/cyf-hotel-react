import React from 'react';
import SearchTable from './SearchTable'
// import Form from './Form';

const Search = props => (
  <div className="search">
    <div className="page-header">
      <h4 className="text-left">Search Bookings</h4>
    </div>
    <div className="row">
      <div className="col">
        { <SearchTable  title="Customer id" placeholder="Customer id" buttonText="Search IDs" id={1}/> }
      </div>
      <div className="col">
        { <SearchTable  title="Customer name" placeholder="Customer name" buttonText="Search Names" id={2}/> }
      </div>

    </div>
  </div>
);


export default Search;

