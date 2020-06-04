import React, { useState } from "react";
import moment from "moment";

function Row(props) {
  const data = props.data;
  const [isSelected, setIsSelected] = useState(false);

  function toggle() {
    setIsSelected(!isSelected);
  }

  const color = isSelected ? "sth" : "";

  function daysDifference(start, end) {
    let startDate = moment(start);
    let endDate = moment(end);
    let diffInDays = startDate.diff(endDate, "days");
    const duration = moment.duration(diffInDays);
    return Math.round(duration);
  }
  return (
    <tr onClick={toggle} key={data.id} className={color}>
      <td>{data.id}</td>
      <td>{data.title}</td>
      <td>{data.firstName}</td>
      <td>{data.surname}</td>
      <td>{data.email}</td>
      <td>{data.roomId}</td>
      <td>{data.checkInDate}</td>
      <td>{data.checkOutDate}</td>
      <td>{daysDifference(data.checkOutDate, data.checkInDate)}</td>
    </tr>
  );
}
export default Row;
// if (isSelected === false) {
//   setIsSelected(true);
// } else {
//   setIsSelected(false);
// }
