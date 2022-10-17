import React, { useState } from "react";
import data from "./data/fakeBookings.json";
const Table = () => {
  const [bookings] = useState(data);
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check In</th>
          <th scope="col">Check out</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map(booking => {
          return (
            <tr>
              <th scope="row">{booking.id}</th>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
