import moment from "moment";
import React, { useState } from "react";

const OneRecord = props => {
  let dOut = moment(props.item.checkOutDate); // dOut = date out
  let dIn = moment(props.item.checkInDate); // dIn = date in
  let Nights = dOut.diff(dIn, "days");

  const [color, setColor] = useState("");

  const highlight = () => {
    if (color === "") {
      setColor("red");
    } else setColor("");
  };

  return (
    <tr style={{ backgroundColor: color }} onClick={highlight}>
      <td> {props.item.id} </td>
      <td> {props.item.title} </td>
      <td> {props.item.firstName} </td>
      <td> {props.item.surname}</td>
      <td> {props.item.email}</td>
      <td> {props.item.roomId} </td>
      <td>{props.item.checkInDate}</td>
      <td>{props.item.checkOutDate}</td>
      <td>{Nights}</td>
    </tr>
  );
};

export default OneRecord;
