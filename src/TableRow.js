import React, { useState } from "react";
import moment from "moment";

const TableRow = ({ booking, setSelected }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelectedClass = () => {
    setIsSelected(!isSelected);
  };

  const handleCostumerId = id => {
    setSelected(id);
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
      <button
        className="btn btn-primary"
        style={{ marginTop: "6px" }}
        onClick={() => handleCostumerId(booking.id)}
      >
        Show profile
      </button>
    </tr>
  );
};
export default TableRow;
