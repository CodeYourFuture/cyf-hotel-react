import React, { useState } from "react";

const TableRow = ({
  booking: {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate,
    numberOfNights
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
      <td>{numberOfNights}</td>
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

export default TableRow;
