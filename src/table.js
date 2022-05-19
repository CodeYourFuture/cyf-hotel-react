import React, { useState } from "react";
const Table = props => {
  const [rowColor, setRowColor] = useState(false);

  function highlightRow(e) {
    setRowColor(!rowColor);
  }
  function setId() {
    props.setCostumerProfileShow(props.id);
  }
  return (
    <>
      <tr>
        <td className={rowColor ? "highlighted" : null} onClick={highlightRow}>
          {props.id}
        </td>
        <td className={rowColor ? "highlighted" : null} onClick={highlightRow}>
          {props.title}
        </td>
        <td className={rowColor ? "highlighted" : null} onClick={highlightRow}>
          {props.firstName}
        </td>
        <td className={rowColor ? "highlighted" : null} onClick={highlightRow}>
          {props.surname}
        </td>
        <td className={rowColor ? "highlighted" : null} onClick={highlightRow}>
          {props.email}
        </td>
        <td className={rowColor ? "highlighted" : null} onClick={highlightRow}>
          {props.roomId}
        </td>
        <td className={rowColor ? "highlighted" : null} onClick={highlightRow}>
          {props.checkInDate}
        </td>
        <td className={rowColor ? "highlighted" : null} onClick={highlightRow}>
          {props.checkOutDate}
        </td>
        <td className={rowColor ? "highlighted" : null} onClick={highlightRow}>
          {props.daysReserved}
        </td>
        <td>
          <button onClick={setId}>Show Profile</button>
        </td>
      </tr>
    </>
  );
};

export default Table;
