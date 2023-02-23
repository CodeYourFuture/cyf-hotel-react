import React, { useState } from "react";
import Moment from "moment";

function BookingRows({ item, index }) {
  const [click, setClick] = useState(false);

  let checkDiff = (InDate, OutDate) => {
    const checkInDate = Moment(InDate, "YYYY-MM-DD");
    const checkOutDate = Moment(OutDate, "YYYY-MM-DD");
    const diff = checkOutDate.diff(checkInDate, "days");
    return diff;
  };

  function changecolor() {
    setClick(click => !click);
  }

  return (
    <tr
      key={index}
      style={{ backgroundColor: click ? "orange" : "white" }}
      onClick={changecolor}
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
        <button onClick={() => item.id}>Show Profile</button>
      </td>
    </tr>
  );
}

export default BookingRows;
