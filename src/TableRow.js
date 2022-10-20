import React from "react";
import moment from "moment";
import { useState } from "react";

function TableRow({ data }) {
  let [selected, setSelected] = useState(false);
  let handleClick = () => setSelected(!selected);
  return (
    <tr className={selected ? "color" : null} onClick={handleClick}>
      <td>{data.title}</td>
      <td>{data.firstName}</td>
      <td>{data.surname}</td>
      <td>{data.email}</td>
      <td>{data.roomId}</td>
      <td>{data.checkInDate}</td>
      <td>{data.checkOutDate}</td>
      <td>
        {moment(data.checkOutDate).diff(moment(data.checkInDate), "days")}
      </td>
    </tr>
  );
}

export default TableRow;
