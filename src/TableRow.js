import React, { useState } from "react";
import NightsCount from "./NightsCount";
import "./TableRow.css";

function handleClick(highlightColor, setHighlightColor) {
  if (highlightColor === "red") {
    setHighlightColor("");
  } else {
    setHighlightColor("red");
  }
}

const TableRow = (props) => {
  const [highlightColor, setHighlightColor] = useState("");

  function handleProfileClick(id) {
    console.log("profile id: ", id);
    props.setCustomerProfileId(id);
  }

  return (
    <tr
      className={highlightColor}
      key={props.index}
      onClick={() => {
        handleClick(highlightColor, setHighlightColor);
      }}
    >
      <td> {props.aBooking.id} </td>
      <td> {props.aBooking.title} </td>
      <td> {props.aBooking.firstName} </td>
      <td> {props.aBooking.surname} </td>
      <td> {props.aBooking.email} </td>
      <td> {props.aBooking.roomId} </td>
      <td> {props.aBooking.checkInDate} </td>
      <td> {props.aBooking.checkOutDate} </td>
      <td>
        <NightsCount
          checkInDate={props.aBooking.checkInDate}
          checkOutDate={props.aBooking.checkOutDate}
        />
      </td>
      <td>
        <button
          onClick={() => {
            handleProfileClick(props.aBooking.id);
          }}
        >
          Show profile
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
