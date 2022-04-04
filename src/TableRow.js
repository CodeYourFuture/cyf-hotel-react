import React, { useState } from "react";
import moment from "moment";

const TableRow = (props) => {
  const item = props.item;
  const [highlight, setHighlight] = useState("false");

  const selected = () => {
    setHighlight(!highlight);
  };

  return (
    <tr
      key={item.id}
      className={highlight ? "" : "highlight"}
      onClick={selected}
    >
      <th scope="row">{item.id}</th>
      <th scope="row">{item.title}</th>
      <th scope="row">{item.firstName}</th>
      <th scope="row">{item.surname}</th>
      <th scope="row">{item.email}</th>
      <th scope="row">{item.roomId}</th>
      <th scope="row">{item.checkInDate}</th>
      <th scope="row">{item.checkOutDate}</th>
      <th scope="row">
        {moment(item.checkOutDate).diff(item.checkInDate, "day")}
      </th>
    </tr>
  );
};

export default TableRow;
