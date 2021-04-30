import React from "react";
import moment from "moment";

function BookingDetails({ info }) {
  const {
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate
  } = info;
  let startDate = moment([checkInDate], "YYYY-MM-DD");
  let endDate = moment([checkOutDate], "YYYY-MM-DD");
  var stayDuration = endDate.diff(startDate, "days");
  return (
    <>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{stayDuration}</td>
    </>
  );
}

export default BookingDetails;
