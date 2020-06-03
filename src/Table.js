import React, { useState } from "react";
import moment from "moment";

const Table = props => {
  const [selected, setSelected] = useState(false);
  const toggle = () => {
    setSelected(!selected);
  };
  const checkIn = moment(props.data.checkOutDate);
  const checkOut = moment(props.data.checkInDate);
  return (
    <tr
      key={props.data.index}
      onClick={toggle}
      className={selected ? "highlight" : null}
    >
      <td>{props.data.id}</td>
      <td>{props.data.title}</td>
      <td>{props.data.firstName}</td>
      <td>{props.data.surname}</td>
      <td>{props.data.email}</td>
      <td>{props.data.roomId}</td>
      <td>{props.data.checkInDate}</td>
      <td>{props.data.checkOutDate}</td>
      <td>{checkIn.diff(checkOut, "days")}</td>
    </tr>
  );
};

//   var a = moment(x.checkInDate);
//   var b = moment(x.checkOutDate);
//   b.diff(a, "days"); // 1

export default Table;
