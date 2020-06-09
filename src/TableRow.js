import React, { useState } from "react";
import moment from "moment";

const TableRow = ({ booking }, props) => {
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
      {/* <button className="btn btn-primary" 
              value={booking.id}
              onClick={}>Show profile
              </button> */}
    </tr>
  );
};
export default TableRow;
