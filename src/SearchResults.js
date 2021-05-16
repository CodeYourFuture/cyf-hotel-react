/* eslint-disable indent*/
import React, { useState } from "react";

import bookingData from "./data/fakeBookings.json";
import TableRow from "./TableRow";

function SearchResults(props) {
  return (
    <table className="table   table-bordered ">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">#Night stayed</th>
        </tr>
      </thead>

      <tbody>
        {props.data.map(elem => (
          <TableRow elem={elem} />
        ))}
      </tbody>
    </table>
  );
}
export default SearchResults;
