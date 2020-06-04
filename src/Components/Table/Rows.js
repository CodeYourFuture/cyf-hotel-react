import React from "react";
import moment from "moment";

const Rows = props => {
  const checkIn = moment(props.data.checkInDate);
  const checkOut = moment(props.data.checkOutDate);
  return (
    <tr
      key={props.data.id}
      className={props.isSelected ? "select" : "notSelect"}
      onClick={() => {
        props.setSelectedRow(props.data.id);
      }}
    >
      <th scope="row">{props.data.id}</th>
      <td>{props.data.title}</td>
      <td>{props.data.firstName}</td>
      <td>{props.data.surname}</td>
      <td>{props.data.email}</td>
      <td>{props.data.roomId}</td>
      <td>{props.data.checkInDate}</td>
      <td>{props.data.checkOutDate}</td>
      <td className="booking-days">{checkOut.diff(checkIn, "days")}</td>
    </tr>
  );
};

export default Rows;
