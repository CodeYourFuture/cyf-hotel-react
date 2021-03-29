import React from "react";
import moment from "moment";
moment().format();

const TableRows = props => {
  const startDate = moment(props.result.checkInDate.split("-"));
  const endDate = moment(props.result.checkOutDate.split("-"));
  let numberOfNights = endDate.diff(startDate, "days", true);
  if (isNaN(numberOfNights)) {
    numberOfNights = "Unknown";
  }

  return (
    <tr>
      <th scope="row">{props.result.id}</th>
      <td>{props.result.title}</td>
      <td>{props.result.firstName}</td>
      <td>{props.result.surname}</td>
      <td>{props.result.email}</td>
      <td>{props.result.roomId}</td>
      <td>{props.result.checkInDate}</td>
      <td>{props.result.checkOutDate}</td>
      <td>{numberOfNights}</td>
    </tr>
  );
};
export default TableRows;
