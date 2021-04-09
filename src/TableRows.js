import React, { useState } from "react";
import moment from "moment";

const TableRows = ({ booking, changeId }) => {
  console.log("This is the changeId function", changeId);
  const [rowClass, setRowClass] = useState(false);
  function handleClick() {
    setRowClass(!rowClass);
  }
  const NumberOfNights = (checkInDate, checkOutDate) => {
    const checkIn = moment(checkInDate);
    const checkOut = moment(checkOutDate);

    return checkOut.diff(checkIn, "days");
  };
  const {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate,
    showProfile
  } = booking;
  console.log("Booking id", booking.id);
  function handleButtonClick() {
    changeId(id);
  }

  return (
    <tr className={rowClass ? "highlight" : ""} onClick={handleClick}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{NumberOfNights(checkInDate, checkOutDate)}</td>
      <button
        onClick={handleButtonClick}
        className="btn btn-outline-success"
        id={id}
      >
        Show Profile {showProfile}
      </button>
    </tr>
  );
};
export default TableRows;