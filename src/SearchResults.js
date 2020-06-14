import React from "react";

import Row from "./Row";
const SearchResults = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.result.map(data => (
          <Row data={data} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
