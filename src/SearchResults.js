import React, { useState } from "react";
import TableRow from "./TableRow";

function SearchResults({ results }) {
  return (
    <div>
      <table class="customer-table table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surename</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Staying duration</th>
          </tr>
        </thead>
        <tbody>
          {results.map(room => {
            return <TableRow key={room.id} {...room} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
export default SearchResults;
