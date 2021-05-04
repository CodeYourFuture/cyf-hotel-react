import React, { useState } from "react";
// import CustomerProfile from "./CustomerProfile";

const SearchResultRow = ({ booking, nights, buttonClickHandler }) => {
  const [isSelected, setSelected] = useState(false);

  const handleRowClick = () => {
    setSelected(!isSelected);
  };

  return (
    <tr onClick={handleRowClick} className={isSelected ? "selected" : null}>
      <th>{booking.title}</th>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{nights}</td>
      <td>
        <button
          className="button button-secondary"
          onClick={() => buttonClickHandler(booking.id)}
        >
          Show profile
        </button>
      </td>
    </tr>
  );
};

export default SearchResultRow;
