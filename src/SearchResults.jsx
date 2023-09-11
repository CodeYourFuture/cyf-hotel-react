import React, { useState } from "react";
import BookingRow from "./BookingRow";

const SearchResults = ({ bookings }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (index) => {
    if (selectedRow === index) {
      setSelectedRow(null);
    } else {
      setSelectedRow(index);
    }
  };

  return (
    <div>
      <h2>Search Results</h2>
      <table>
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
          {bookings.map((booking, index) => (
            <BookingRow
              key={booking.id}
              booking={booking}
              onClick={() => handleRowClick(index)}
              isSelected={selectedRow === index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
