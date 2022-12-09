import React from "react";

import SearchResult from "./SearchResult";

function SearchResults({ results }) {
  return (
    <div id="searchResults">
      <table class="table table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check In Out</th>
            <th scope="col">Number OF Nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, i) => (
            <SearchResult key={i} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default SearchResults;
