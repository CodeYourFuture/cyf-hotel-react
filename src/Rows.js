import React, { useState } from "react";
import moment from "moment";
export default function Rows({ data, setId }) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  function toggleRow() {
    if (isHighlighted === false) {
      setIsHighlighted(true);
    } else {
      setIsHighlighted(false);
    }
  }
  const onClickHandle = () => {
    setId(data.id);
  };
  const color = isHighlighted ? "yellow" : "";
  return (
    <tr key={data.id} onClick={toggleRow} className={color}>
      <td>{data.id}</td>
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
      <td>
        <button onClick={onClickHandle} className="btn btn-primary">
          {""}
          Show Profile
        </button>
      </td>
    </tr>
  );
}
