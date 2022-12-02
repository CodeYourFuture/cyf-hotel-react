import React from "react";
import SearchResult from "./SearchResult";

export default function SearchResults({ bookings }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, i) => (
            <SearchResult i={i} booking={booking} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
