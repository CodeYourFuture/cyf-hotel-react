import React, { useState } from "react";
import moment from "moment";
export default function TableRows({ booking }) {
  const [selectedClass, setSelectedClass] = useState("");
  function toggleClassName() {
    setSelectedClass(previousClass => (previousClass === "" ? "selected" : ""));
  }
  function howManyDay(checkInDate, checkOutDate) {
    checkInDate = moment(checkInDate);
    checkOutDate = moment(checkOutDate);
    return checkOutDate.diff(checkInDate, "days");
  }
  return (
    <tr className={selectedClass} onClick={toggleClassName}>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{howManyDay(booking.checkInDate, booking.checkOutDate)}</td>
    </tr>
  );
}
