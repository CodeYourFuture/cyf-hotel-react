import React from "react";
import TableRow from "./TableRow";

const SearchResults = ({ customerBookings }) => {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Room #</th>
          <th scope="col">Check-in</th>
          <th scope="col">Check-out</th>
          <th scope="col">Duration</th>
        </tr>
      </thead>
      <tbody>
        {customerBookings.map((customer, index) => {
          return <TableRow key={index} customerList={customer} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
