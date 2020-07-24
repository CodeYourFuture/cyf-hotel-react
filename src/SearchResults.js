import React from "react";
import TableRow from "./TableRow.js";

function SearchResults(props) {
  const table = (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Number of Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => {
          return <TableRow key={result.id} result={result} />;
        })}
      </tbody>
    </table>
  );
  return table;
}

export default SearchResults;
