import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ bookings, changeId }) => {
  return (
    <tbody>
      {bookings &&
        bookings.length > 0 &&
        bookings.map(booking => (
          <TableRow key={booking.id} booking={booking} changeId={changeId} />
        ))}
    </tbody>
  );
};
export default TableBody;
