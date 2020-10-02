import React, { useState } from "react";
import moment from "moment";

const IndividualBooking = ({ item }) => {
  const [highlight, setHighlight] = useState("noHighlight");

  const checkIn = moment(item.checkInDate);
  const checkOut = moment(item.checkOutDate);
  const numOfNights = checkOut.diff(checkIn, "days");

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
    </tr>
  );
};

export default IndividualBooking;
