import React from "react";
import moment from "moment";
import { useState } from "react";

function TableRow({
  id,
  title,
  firstName,
  surname,
  email,
  roomId,
  checkInDate,
  checkOutDate,
  showCustomerProfile
}) {
  const [isSelected, setIsSelected] = useState(false);

  const checkIn = moment(checkInDate);
  const checkOut = moment(checkOutDate);
  return (
    <tr
      className="table-row"
      style={{ backgroundColor: `${isSelected ? " #f0f0f0" : "white"}` }}
      onClick={() => setIsSelected(!isSelected)}
    >
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{checkOut.diff(checkIn, "days")}</td>
      <td>
        <button
          className="btn btn-outline-success"
          data-toggle="modal"
          data-target="#customer-profile"
          onClick={() => showCustomerProfile(id)}
        >
          Show profile
        </button>
      </td>
    </tr>
  );
}
export default TableRow;
