import React, { useState } from "react";
import moment from "moment";
import "../index.css";

const SearchResults = ({ bookings }) => {
  const [selectedRows, setSelectedRows] = useState({});

  const handleRowClick = (bookingId) => {
    setSelectedRows((prevState) => ({
      ...prevState,
      [bookingId]: !prevState[bookingId]
    }));
  };

  return (
    <table className="table">
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
          <th>Nights</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking) => {
          const checkInDate = moment(booking.checkInDate);
          const checkOutDate = moment(booking.checkOutDate);
          const nights = checkOutDate.diff(checkInDate, "days");

          const rowClass = selectedRows[booking.id] ? "selected-row" : "";

          return (
            <tr
              key={booking.id}
              className={rowClass}
              onClick={() => handleRowClick(booking.id)}
            >
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{nights}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
