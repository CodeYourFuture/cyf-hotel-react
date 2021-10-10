import React, { useState } from "react";

import TableRow from "./TableRow";

const SearchResults = prop => {
  const customer = prop.results;

  return (
    <table className="table table-responsive table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">RoomId</th>
          <th scope="col">CheckInDate</th>
          <th scope="col">CheckOutDate</th>
          <th scope="col">Nights Stay</th>
        </tr>
      </thead>
      <tbody>
        {customer.map(customer => {
          return <TableRow customerdata={customer} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
