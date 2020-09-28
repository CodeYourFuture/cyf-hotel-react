import React, { useState } from "react";
// import FakeBookings from "./FakeBookings";

import SearchLine from "./SearchLine";
// import {BootstrapTable, TableHeaderColumn} from
//        'react-bootstrap-table'
// import '../css/Table.css'
// import '../dist/react-bootstrap-table-all.min.css'

const SearchResults = ({ results }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map(item => (
          <SearchLine item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
