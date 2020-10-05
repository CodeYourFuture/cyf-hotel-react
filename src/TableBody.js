import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ bookings, handleButtonClick }) => {
  return (
    <tbody>
      {bookings.map(booking => (
        <TableRow
          key={booking.id}
          booking={booking}
          handleButtonClick={handleButtonClick}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
