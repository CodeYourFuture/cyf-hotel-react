import React, { useState } from "react";
import moment from "moment";

const TableRow = ({
  content: {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate,
    numOfNights
  },
  setCustomerId
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  const handleShowProfile = () => {
    setCustomerId(id);
  };

  return (
    <tr
      onClick={handleClick}
      style={isSelected ? { backgroundColor: "yellow" } : null}
    >
      <th scope="row" />
      <td>{id}</td>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{moment(checkOutDate).diff(checkInDate, "days")}</td>
      <td>
        <button className="btn btn-primary" onClick={handleShowProfile}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};
export default TableRow;
