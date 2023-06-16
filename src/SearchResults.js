import React from "react";

const SearchResults = (props) => {
  return (
    <table class="table">
   <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>FirstName</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check-in Date</th>
          <th>Check-out Date</th>
        </tr>
      </thead>
      <tbody>
        {props.bookings.map(booking => (
          <tr key={booking.id}>
            <td>{booking.id}</td>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
          </tr>
        ))}
      </tbody>
</table>
  );
}
export default SearchResults;