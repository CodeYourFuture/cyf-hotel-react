import React from "react";
import Row from "./Row";

const SearchResults = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>

      {props.results.map((booking, index) => (
        <Row key={index} booking={booking} />
      ))}
    </table>
  );
};

export default SearchResults;
