import React, { useState } from "react";
import moment from "moment";
export default function TableRows({ booking, setCustomerProfileId }) {
  const [selectedClass, setSelectedClass] = useState("");
  function toggleClassName() {
    setSelectedClass(previousClass => (previousClass === "" ? "selected" : ""));
  }
  function howManyDay(checkInDate, checkOutDate) {
    checkInDate = moment(checkInDate);
    checkOutDate = moment(checkOutDate);
    return checkOutDate.diff(checkInDate, "days");
  }

  function handleSetCustomerProfileId() {
    setCustomerProfileId(booking.id);
  }

  return (
    <tr className={`table-row ${selectedClass}`} onClick={toggleClassName}>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{howManyDay(booking.checkInDate, booking.checkOutDate)}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={handleSetCustomerProfileId}
        >
          Show profile
        </button>
      </td>
    </tr>
  );
}
