import React, { useState } from "react";

import TableRow from "./TableRow";
const SearchResults = props => {
  const { results } = props;

  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Booking length</th>
        </tr>
      </thead>
      <tbody>
        {results.map((booking, index) => (
          <TableRow booking={booking} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
