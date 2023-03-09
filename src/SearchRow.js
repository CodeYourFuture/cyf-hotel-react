import React, { useState, useEffect } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

function SearchRow(props) {
  const [colour, setColour] = useState("");
  function NewColor() {
    setColour(colour ? "" : "newTrColor");
  }

  const [showCustomerProfile, setShowProfile] = useState(false);
  function profileHandler () {
    setShowProfile(showProfile => !showProfile )
  }

  return (
    <>
      <tr className={colour} onClick={NewColor}>
        <td scope="row">{props.guest.id}</td>
        <td>{props.guest.title}</td>
        <td>{props.guest.firstName}</td>
        <td>{props.guest.surname}</td>
        <td>{props.guest.email}</td>
        <td>{props.guest.roomId}</td>
        <td>{props.guest.checkInDate}</td>
        <td>{props.guest.checkOutDate}</td>
        <td> {moment(props.guest.checkOutDate).diff(moment(props.guest.checkInDate),"days" )}</td>
        <td>
          <button className = "button-pointer"  onClick = {profileHandler}>{showCustomerProfile? "Hide Profile" : "Show Profile"}</button>
        </td>
      </tr>
        <td colSpan={5}>{showCustomerProfile && <CustomerProfile id={props.guest.id}/>}</td>
    </>
  );
}

export default SearchRow;
