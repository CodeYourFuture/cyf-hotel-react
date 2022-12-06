import React from "react";
import moment from "moment";

const SearchResults = props => {
  //   let moment = require("moment");
  //   moment().format();

  console.log(props.bookings, "<-- Booking");
  return (
    <table className="table table-sm table-hover small">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.bookings.map(booking => (
          <tr>
            <td>{booking.id}</td>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
            <td>
              {moment(booking.checkOutDate).diff(
                moment(booking.checkInDate),
                "days"
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
