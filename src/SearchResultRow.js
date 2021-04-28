import React, { useState } from "react";

const SearchResultRow = ({ booking, nights }) => {
  const [isSelected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!isSelected);
  };

  return (
    <tr onClick={handleClick} className={isSelected ? "selected" : null}>
      <th>{booking.title}</th>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{nights}</td>
    </tr>
  );
};

export default SearchResultRow;
