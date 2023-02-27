import React from "react";

const SearchResults = ({ bookings }) => {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Firstname</th>
          <th scope="col">Surename</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out Date</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((bookings) => (
          <tr key={bookings.id}>
            <td>{bookings.id}</td>
            <td>{bookings.title}</td>
            <td>{bookings.firstName}</td>
            <td>{bookings.surname}</td>
            <td>{bookings.email}</td>
            <td>{bookings.roomId}</td>
            <td>{bookings.checkInDate}</td>
            <td>{bookings.checkOutDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
