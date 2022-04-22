import React, { useState } from "react";
import moment from "moment";

const TableRow = ({ reservation, handleButtonClick }) => {
  const [isSelected, setSelected] = useState(false);

  let dayIn = moment(reservation.checkInDate);
  let dayOut = moment(reservation.checkOutDate);
  let daysDiff = dayOut.diff(dayIn, "days");

  const handleRowClick = () => {
    setSelected(prevIsSelected => !prevIsSelected);
  };

  return (
    <tr className={isSelected ? "isSelected" : null} onClick={handleRowClick}>
      <th scope="row">{reservation.id}</th>
      <td>{reservation.title}</td>
      <td>{reservation.firstName}</td>
      <td>{reservation.surname}</td>
      <td>{reservation.email}</td>
      <td>{reservation.roomId}</td>
      <td>{reservation.checkInDate}</td>
      <td>{reservation.checkOutDate}</td>
      <td>{daysDiff}</td>
      <td>
        <button
          onClick={() => handleButtonClick(reservation.id)}
          className="btn btn-primary"
        >
          Show profile
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
