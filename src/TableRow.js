import React, { useState } from "react";
import moment from "moment";

function TableRow(props) {
  const [highlight, setHighlight] = useState(false);

  function highlightWhenClicked() {
    setHighlight(!highlight);
  }

  function handleClick() {
    props.searchId(props.customer.id);
  }

  return (
    <tr
      key={props.customerIndex}
      onClick={highlightWhenClicked}
      className={highlight ? "highlighted body-rows" : "body-rows"}
    >
      <th scope="row">{props.customer.id}</th>
      <td>{props.customer.title}</td>
      <td>{props.customer.firstName}</td>
      <td>{props.customer.surname}</td>
      <td>{props.customer.email}</td>
      <td>{props.customer.roomId}</td>
      <td>{props.customer.checkInDate}</td>
      <td>{props.customer.checkOutDate}</td>
      <td>
        {moment(props.customer.checkOutDate).diff(
          moment(props.customer.checkInDate),
          "days"
        )}
      </td>
      <td className="remove-highlighter">
        <button className="btn btn-info" onClick={handleClick}>
          Show profile
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
