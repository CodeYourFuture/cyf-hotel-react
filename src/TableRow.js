import React, { useState } from "react";
import moment from "moment";

const TableRow = props => {
  const [selected, setSelected] = useState("");
  function handleClick() {
    if (selected === "") {
      setSelected("highlighted");
    } else {
      setSelected("");
    }
  }
  return (
    <tr onClick={handleClick} className={selected}>
      <th scope="row">{props.guest.id}</th>
      <td>{props.guest.title}</td>
      <td>{props.guest.firstName}</td>
      <td>{props.guest.surname}</td>
      <td>{props.guest.email}</td>
      <td>{props.guest.roomId}</td>
      <td>{props.guest.checkInDate}</td>
      <td>{props.guest.checkOutDate}</td>
      <td>
        {moment(props.guest.checkOutDate).diff(
          moment(props.guest.checkInDate),
          "days"
        )}
      </td>
      <td>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={() => props.setCustomerId(props.guest.id)}
        >
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
