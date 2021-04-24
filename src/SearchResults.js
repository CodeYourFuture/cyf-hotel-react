import React from "react";
import FakeBookings from "./data/fakeBookings.json";

const SearchResults = props => {
  return (
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check-in Date</th>
          <th scope="col">Check-out Date</th>
        </tr>
      </thead>
      <tbody>
        {FakeBookings.map((booking, index) => (
          <tr key={index}>
            <th scope="col">{booking.id}</th>
            <th scope="col">{booking.title}</th>
            <th scope="col">{booking.firstName}</th>
            <th scope="col">{booking.surname}</th>
            <th scope="col">{booking.email}</th>
            <th scope="col">{booking.roomId}</th>
            <th scope="col">{booking.checkInDate}</th>
            <th scope="col">{booking.checkOutDate}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
