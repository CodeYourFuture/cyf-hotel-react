import React from "react";
import moment from "moment";

const TableRow = ({
  booking: {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate
  }
}) => {
  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{calcNumberOfNights(checkInDate, checkOutDate)}</td>
    </tr>
  );
};

const calcNumberOfNights = (checkInDate, checkOutDate) => {
  const checkIn = moment(checkInDate);
  const checkOut = moment(checkOutDate);

  return checkOut.diff(checkIn, "days");
};

export default TableRow;
