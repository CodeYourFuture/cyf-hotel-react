import React, { useState } from "react";
import moment from "moment";
import "./App.css";
//import CustomerProfile from "./CustomerProfile";
const Row = props => {
  const [color, changeColor] = useState("white");

  function selectId(event) {
    props.selectRow(event.target.id);
  }
  //function to change color of row
  function setColorAndId(event) {
    if (color === "white") {
      changeColor("lightBlue");
    } else {
      changeColor("white");
    }

    //setId(event.target.id);
  }

  return (
    <>
      <tr
        id={props.props.id}
        onClick={setColorAndId}
        style={{ backgroundColor: color }}
      >
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
          <button
            id={props.props.id}
            onClick={selectId}
            style={{ backgroundColor: color }}
          >
            Show profile
          </button>
        </td>
      </tr>
    </>
  );
};
export default Row;
