import React, { useState } from "react";

const Rows = props => {
  const [highlight, setHighlight] = useState();
  function highlighter() {
    setHighlight("red");
    if (highlight) {
      setHighlight();
    }
  }
  return (
    <tbody>
      <tr key onClick={highlighter} className={highlight}>
        <th scope="row">{props.id}</th>
        <td>{props.title}</td>
        <td>{props.firstName}</td>
        <td>{props.surName}</td>
        <td>{props.email}</td>
        <td>{props.roomId}</td>
        <td>{props.checkInDate}</td>
        <td>{props.checkOutDate}</td>
        <td>{props.numberOfNights}</td>
      </tr>
    </tbody>
  );
};

export default Rows;
