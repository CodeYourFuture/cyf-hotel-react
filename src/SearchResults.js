import React, { useState } from "react";
import AddBooking from "./AddBooking";
import TableRow from "./TableRow";

const SearchResults = props => {
  const { results, setBookings } = props;

  return (
    <>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Booking length</th>
            <th scope="col">Show Profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map((booking, index) => (
            <TableRow booking={booking} key={index} />
          ))}
        </tbody>
      </table>
      <AddBooking setBookings={setBookings} results={results} />
    </>
  );
};

export default SearchResults;
