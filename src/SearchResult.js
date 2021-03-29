import React, { useState } from "react";
import moment from "moment";

const SearchResult = props => {
  var checkOut = moment(props.booking.checkOutDate);
  var checkIn = moment(props.booking.checkInDate);
  const days = checkOut.diff(checkIn, "days"); // 86400000

  const [highlightColor, setHighlightColor] = useState("");
  const changeHighlightColor = () => {
    if (highlightColor === "") {
      return setHighlightColor("purple");
    }
    setHighlightColor("");
  };

  return (
    <tr onClick={changeHighlightColor} className={highlightColor}>
      <td>{props.booking.id}</td>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>{days}</td>
    </tr>
  );
};

export default SearchResult;
