import React, { useState } from "react";
import moment from "moment";

const EachRow = ({ booking }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelectedClass = () => {
    setIsSelected(!isSelected);
  };

  const checkIn = moment(booking.checkOutDate);
  const checkOut = moment(booking.checkInDate);

  return (
    <tr
      key={booking.id}
      onClick={toggleSelectedClass}
      className={!!isSelected ? "highlight" : null}
    >
      <th scope="row">{booking.id}</th>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{checkIn.diff(checkOut, "days")}</td>
    </tr>
  );
};
export default EachRow;
