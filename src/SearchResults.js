import React from "react";

import SearchResult from "./SearchResult";

function SearchResults({ bookings, custmerResult }) {
  return (
    <div id="searchResults">
      <table className="table table">
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
            <th scope="col">display Profile</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, i) => (
            <SearchResult
              key={i}
              booking={booking}
              custmerResult={custmerResult}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default SearchResults;
