import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const IndividualBooking = ({ item, getId }) => {
  const [highlight, setHighlight] = useState("noHighlight");
  // const [id, setId] = useState(0);
  const checkIn = moment(item.checkInDate);
  const checkOut = moment(item.checkOutDate);
  const numOfNights = checkOut.diff(checkIn, "days");

  // function getId() {
  //   setId(item.id)
  //   // id(id)
  //   console.log(id);
  // }

  function changeHighlight() {
    if (highlight === "highlight") {
      setHighlight("noHighlight");
    } else {
      setHighlight("highlight");
    }
  }

  return (
    <tr className={highlight} onClick={changeHighlight}>
      <th scope="row">{item.id}</th>
      <td>{item.title}</td>
      <td>{item.firstName}</td>
      <td>{item.surname}</td>
      <td>{item.email}</td>
      <td>{item.roomId}</td>
      <td>{item.checkInDate}</td>
      <td>{item.checkOutDate}</td>
      <td>{numOfNights}</td>
      <td>
        <button className="btn btn-primary" onClick={() => getId(item.id)}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default IndividualBooking;
