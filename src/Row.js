import React, { useState } from "react";
import moment from "moment";
const Row = props => {
  const [color, changeColor] = useState("white");
  function setColor(event) {
    if (color === "white") {
      changeColor("lightBlue");
    } else {
      changeColor("white");
    }
  }
  console.log(props);
  return (
    <>
      <tr id={props.id} onClick={setColor} style={{ backgroundColor: color }}>
        <td>{props.props.id}</td>
        <td>{props.props.title}</td>
        <td>{props.props.firstName}</td>
        <td>{props.props.surname}</td>
        <td>{props.props.email}</td>
        <td style={{ textAlign: "center" }}>{props.props.roomId}</td>
        <td>{props.props.checkInDate}</td>
        <td>{props.props.checkOutDate}</td>
        <td>
          Mr {props.props.firstName} has a booking for{" "}
          {moment(moment(props.props.checkOutDate, "YYYY-MM-DD")).diff(
            moment(props.props.checkInDate, "YYYY-MM-DD"),
            "days"
          )}{" "}
          nights
        </td>
        <td>
          <button onClick={setColor} style={{ backgroundColor: color }}>
            click
          </button>
        </td>
      </tr>
    </>
  );
};
export default Row;
