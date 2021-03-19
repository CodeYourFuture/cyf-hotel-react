import React from "react";
import moment from "moment";

const SearchResult = props => {
  var checkOut = moment(props.booking.checkOutDate);
  var checkIn = moment(props.booking.checkInDate);
  const days = checkOut.diff(checkIn, "days"); // 86400000
  return (
    <tr>
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
