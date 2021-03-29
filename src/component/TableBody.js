import React, { useState } from "react";
import moment from "moment";

const TableRow = props => {
  const [highLight, setHighlight] = useState("noColor");
  const highlightRow = () => {
    setHighlight(highLight => {
      if (highLight === "noColor") {
        return "color";
      } else {
        return "noColor";
      }
    });
  };

  return (
    <tr onClick={highlightRow} className={highLight}>
      <th scope="row" />
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
      <td>
        <button className="btn btn-primary">Show profile</button>
      </td>
    </tr>
  );
};

const TableBody = props => {
  return (
    <tbody>
      {props.bookings.map((booking, index) => (
        <TableRow booking={booking} key={index} />
      ))}
    </tbody>
  );
};

export default TableBody;
