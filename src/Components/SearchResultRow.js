import React, { useState } from "react";
import moment from "moment";

const SearchResultRow = props => {
  const [selected, setSelected] = useState(false);
  const {
    index,
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate
  } = props;

  function handleClick(event) {
    console.log(event.target.value);
    setSelected(!selected);
  }

  return (
    <tr
      key={index}
      onClick={handleClick}
      className={selected ? "highlightRow" : ""}
    >
      <td>{id}</td>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{moment(checkOutDate).diff(moment(checkInDate), "days")}</td>
      <td />
    </tr>
  );
};

export default SearchResultRow;
