import React from "react";
import TableRow from "./TableRow";

const SearchResults = props => {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check-in Date</th>
          <th scope="col">Check-out Date</th>
          <th scope="col">No. of Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(booking => {
          return <TableRow booking={booking} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
