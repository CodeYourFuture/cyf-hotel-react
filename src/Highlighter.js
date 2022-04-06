import React, { useState } from "react";

const Highlighter = (props) => {
  const [clicked, setClicked] = useState(false);

  const highlight = () => {
    setClicked(!clicked);
  };

  return (
    <tr onClick={highlight} className={clicked ? "table-info" : ""}>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.firstName}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.roomId}</td>
      <td>{props.checkInDate}</td>
      <td>{props.checkOutDate}</td>
    </tr>
  );
};

export default Highlighter;
