import React, { useState } from "react";
import moment from "moment";

const TableRow = props => {
  const [handleClick, setHandleClick] = useState(false);
  return (
    <tr
      id="table-row"
      className={handleClick ? "tr-selected" : null}
      onClick={() => {
        setHandleClick(!handleClick);
      }}
    >
      <th scope="row" />
      <td>{props.item.id}</td>
      <td>{props.item.title}</td>
      <td>{props.item.firstName}</td>
      <td>{props.item.surname}</td>
      <td>{props.item.email}</td>
      <td>{props.item.roomId}</td>
      <td>{props.item.checkInDate}</td>
      <td>{props.item.checkOutDate}</td>
      <td>
        {moment(props.item.checkOutDate).diff(props.item.checkInDate, "days")}
      </td>
    </tr>
  );
};

export default TableRow;
