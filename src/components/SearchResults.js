import React, { useState } from "react";
import TableRow from "./TabelRow";
import moment from "moment";

const SearchResults = ({ results }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check In date</th>
          <th scope="col">Check Out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map((bookingDetails, index) => (
          <TableRow result={bookingDetails} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
