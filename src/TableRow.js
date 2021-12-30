import moment from "moment";
import React, { useState } from "react";

function TableRow(props) {
  const [selectedStatus, setSelectedStatus] = useState("");
  function handleClick() {
    return selectedStatus === ""
      ? setSelectedStatus(() => "table-primary")
      : setSelectedStatus(() => "");
  }

  return (
    <tr className={selectedStatus} onClick={handleClick}>
      <td scope="row">{props.data.id}</td>
      <td>{props.data.title}</td>
      <td>{props.data.firstName}</td>
      <td>{props.data.surname}</td>
      <td>{props.data.email}</td>
      <td>{props.data.roomId}</td>
      <td>{props.data.checkInDate}</td>
      <td>{props.data.checkOutDate}</td>
      <td>
        {moment(props.data.checkOutDate).diff(
          moment(props.data.checkInDate),
          "days"
        )}
      </td>
    </tr>
  );
}

export default TableRow;
