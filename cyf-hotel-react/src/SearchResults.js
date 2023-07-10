import React, { useState } from "react";
import moment from "moment";

const SearchResults = (props) => {
  const [selectedRow, setSelectedRow] = useState(false);

  const RowSelection = (bookingId) => {
    setSelectedRow((SelectedRow) => 
      SelectedRow === bookingId ? null : bookingId);
  };

  const calculateNumberOfNights = (checkInDate, checkOutDate) => {
    const start = moment(checkInDate);
    const end = moment(checkOutDate);
    return end.diff(start, "days");
  };

  return (
    <table className="table">
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
          <th>Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.bookings.map((booking) => (
          <tr
            key={booking.id}
            onClick={() => RowSelection(booking.id)}
            style={{
              backgroundColor: selectedRow === booking.id ? "lightgrey" : "inherit",
            }}
          >
            <td>{booking.id}</td>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
            <td>{calculateNumberOfNights(booking.checkInDate, booking.checkOutDate)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
