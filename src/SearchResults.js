import React from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check-in Date</th>
          <th>Check-out Date</th>
          <th>Number nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map((booking) => (
          <tr key={booking.id}>
            <td>{booking.id}</td>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
            <td>
              {moment(booking.checkOutDate).diff(booking.checkInDate, "days")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};



export default SearchResults;
