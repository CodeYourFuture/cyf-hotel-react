import React from "react";
import SearchResultRow from "./SearchResultRow";

function SearchResults(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Days</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((booking, index) => (
          <SearchResultRow key={index} booking={booking} />
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;
