import React from "react";

const SearchResults = prop => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room ID</th>
        <th scope="col">Check-in date</th>
        <th scope="col">Check-out date</th>
        <th scope="col">Number of nights</th>
      </tr>
    </thead>
    <tbody>
      {prop.results.map(booking => {
        const d1 = new Date(booking.checkOutDate);
        const d2 = new Date(booking.checkInDate);
        return (
          <tr>
            <td>{booking.id}</td>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
            <td>{Math.abs((d1 - d2) / (1000 * 24 * 60 * 60))}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default SearchResults;
