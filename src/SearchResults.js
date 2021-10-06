import React from "react";

function SearchResults(props) {
  return (
    <table class="table">
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
        {props.results.map(booking => (
          <tr>
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
