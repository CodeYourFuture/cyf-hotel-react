import React from "react";
import "./SearchResults.css";
import BookingRow from "./BookingRow";

const SearchResults = ({ results, handler }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Nights</th>
          <th scope="col">Show Profile</th>
        </tr>
      </thead>
      <tbody>
        {results.map(booking => {
          return <BookingRow booked={booking} handler={handler} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
