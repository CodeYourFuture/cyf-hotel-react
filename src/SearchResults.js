import React from "react";
import TableRow from "./TableRow";

function SearchResults(props) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#id </th>
          <th scope="col">Title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => (
          <TableRow data={result} />
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;
