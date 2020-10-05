import React, { useState } from "react";
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
  },
  handleButtonClick
}) => {
  const [selected, setSelected] = useState(false);

  const toggleHighlight = () => {
    setSelected(!selected);
  };

  return (
    <tr
      className={selected ? "table-active" : ""}
      key={id}
      onClick={toggleHighlight}
    >
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{calcNumberOfNights(checkInDate, checkOutDate)}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleButtonClick(id)}
        >
          Show profile
        </button>
      </td>
    </tr>
  );
};

const calcNumberOfNights = (checkInDate, checkOutDate) => {
  const checkIn = moment(checkInDate);
  const checkOut = moment(checkOutDate);

  return checkOut.diff(checkIn, "days");
};

export default TableRow;
