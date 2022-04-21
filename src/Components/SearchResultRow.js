import React, { useState } from "react";
import moment from "moment";

const SearchResultRow = props => {
  const {
    index,
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate,
    handleButtonClick
  } = props;

  const [selected, setSelected] = useState(false);

  function handleClick() {
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
      <td>
        <button
          onClick={() => {
            handleButtonClick(id);
          }}
        >
          ViewProfile
        </button>
      </td>
      <td />
    </tr>
  );
};

export default SearchResultRow;
