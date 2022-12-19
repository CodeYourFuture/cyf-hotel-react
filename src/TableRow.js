import React, { useState } from "react";
import Moment from "moment";
function TableRow({ item, showCustomerProfile }) {
  const [color, setColor] = useState(false);
  let checkDiff = (InDate, OutDate) => {
    const checkInDate = Moment(InDate, "YYYY-MM-DD");
    const checkOutDate = Moment(OutDate, "YYYY-MM-DD");
    const diff = checkOutDate.diff(checkInDate, "days");
    return diff;
  };
  return (
    <tr
      key={item.id}
      style={{ backgroundColor: `${color ? "wheat" : "white"}` }}
      onClick={() => setColor(true)}
    >
      <th scope="row">{item.id}</th>
      <td>{item.title}</td>
      <td>{item.firstName}</td>
      <td>{item.surname}</td>
      <td>{item.email}</td>
      <td>{item.roomId}</td>
      <td>{item.checkInDate}</td>
      <td>{item.checkOutDate}</td>
      <td>{checkDiff(item.checkInDate, item.checkOutDate)}</td>
      <td>
        <button
          className="btn btn-outline-success"
          onClick={() => showCustomerProfile(item.id)}
        >
          show profile
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
