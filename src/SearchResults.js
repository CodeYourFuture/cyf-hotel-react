import React from "react";
import TableRow from "./TableRow";

function SearchResults(props) {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out Date</th>
            <th scope="col">Number of Nights Stay</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result, index) => (
            <TableRow row={result} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
