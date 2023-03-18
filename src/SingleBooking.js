import React, { useState } from "react";
import moment from "moment";

const SingleBooking = ({booking}) => {
  const [bg, setBg] = useState("white");

  const handleClick = () => {
    bg === "white" ? setBg("grey") : setBg("white");
  };
  let backgroundColor = bg;

  const styles = {
    backgroundColor: backgroundColor,
  };
  console.log(booking);
  return (
    <tr className={bg} style={styles} onClick={handleClick}>
      <td>{booking.id}</td>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{moment(booking.checkOutDate).diff(booking.checkInDate, "days")}</td>
    </tr>
  );
};

export default SingleBooking;
