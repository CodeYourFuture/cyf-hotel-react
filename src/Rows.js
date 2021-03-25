import React, { useState } from "react";

const Rows = props => {
  const [selected, setSelected] = useState();
  function selector() {
    setSelected("red");
    if (selected) {
      setSelected();
    }
  }
  return (
    <tbody>
      <tr key onClick={selector} className={selected}>
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
