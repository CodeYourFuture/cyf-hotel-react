import React from "react";
import TableRow from "./TableRow";

const SearchResults = props => {
  console.log(props.guests);

  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email Address</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Number Of Nights</th>
          <th scope="col">Profile</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((guest, index) => (
          <TableRow key={index} guest={guest} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
