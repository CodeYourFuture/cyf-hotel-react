import React, { useState } from "react";
import SearchResultRow from "./SearchResultRow";

function SearchResults({ bookingsArray }) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check-In Date</th>
            <th scope="col">Check-Out Date</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {bookingsArray.map((booking) => (
            <SearchResultRow booking={booking} key={booking.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default SearchResults;
