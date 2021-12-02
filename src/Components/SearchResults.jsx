import React, { useState } from "react";
import TableRow from "./TableRow";

const SearchResults = props => {
  return (
    <table className="table table-hover my-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Title</th>
          <th scope="col">Email</th>
          <th scope="col">Room</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Total Nights Stayed</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((person, index) => (
          <TableRow person={person} index={index} key={person.firstName} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
