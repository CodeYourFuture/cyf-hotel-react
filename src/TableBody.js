import React from "react";
import moment from "moment";

const TableRows = props => {
  return (
    <tr>
      <th scope="row">{props.booking.id}</th>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>
        {moment(props.booking.checkOutDate).diff(
          moment(props.booking.checkInDate),
          "days"
        )}
      </td>
    </tr>
  );
};
const TableBody = props => {
  return (
    <tbody>
      {props.newData.map((booking, index) => (
        <TableRows key={index} booking={booking} />
      ))}
    </tbody>
  );
};

export default TableBody;
