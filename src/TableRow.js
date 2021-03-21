import React, { useState } from "react";
import moment from "moment";
moment().format();

const TableRow = props => {
  const [highlightClass, setHighlightClass] = useState("noHighlight");

  const highlightRow = () => {
    setHighlightClass(highlightClass => {
      if (highlightClass === "noHighlight") {
        return "highlight";
      } else {
        return "noHighlight";
      }
    });
  };

  const startDate = moment(props.result.checkInDate);
  const endDate = moment(props.result.checkOutDate);
  let numberOfNights = endDate.diff(startDate, "days", true);

  return (
    <tr onClick={highlightRow} className={highlightClass}>
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

export default TableRow;
