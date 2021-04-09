import React from "react";
import TableRows from "./TableRows";

const TableBody = ({ bookings, changeId }) => {
  return (
    <tbody>
      {bookings &&
        bookings.length > 0 &&
        bookings.map(booking => (
          <TableRows key={booking.id} booking={booking} changeId={changeId} />
        ))}
    </tbody>
  );
};

export default TableBody;

