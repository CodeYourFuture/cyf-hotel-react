import React from "react";
import moment from "moment";

function calcDeff(chkIn, chkOut) {
  return moment(chkOut, "YYYY-MM-DD").diff(moment(chkIn, "YYYY-MM-DD"), "days");
}

const BookingRow = props => {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.title}</td>
      <td>{props.firstName}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.roomId}</td>
      <td>{props.checkInDate}</td>
      <td>{props.checkOutDate}</td>
      <td>{calcDeff(props.checkInDate, props.checkOutDate) + " nights"}</td>
    </tr>
  );
};

export default BookingRow;
