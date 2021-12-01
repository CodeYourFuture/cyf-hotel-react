import React, { useState } from "react";
import moment from "moment";

const TableRow = props => {
  let checkIn = moment(props.booking.checkInDate);
  let checkOut = moment(props.booking.checkOutDate);

  const [selected, setSelected] = useState(null);
  const highlightingRow = () => {
    if (selected === props.booking.id) {
      setSelected(null);
    } else {
      setSelected(props.booking.id);
    }
  };
  return (
    <tr
      onClick={highlightingRow}
      className={selected === props.booking.id ? "HighLighted" : ""}
    >
      <td>{props.booking.id}</td>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>{checkOut.diff(checkIn, "days")}</td>
      <td>
        <button
          className="btn btn-primary ButtonInfoCard"
          onClick={e => {
            e.stopPropagation();
            props.func(props.booking.id);
          }}
        >
          Show profile
        </button>
      </td>
    </tr>
  );
};
export default TableRow;
