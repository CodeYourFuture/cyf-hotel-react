/* eslint-disable indent*/

import React from "react";
import TableBody from "./TableBody";
import bookingData from "./data/fakeBookings.json";

function SearchResults() {
  return (
    <table className="table table-hover table-striped table-bordered ">
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

      <TableBody data={bookingData} />
    </table>
  );
}

export default SearchResults;
