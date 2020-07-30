import React, { useState } from "react";
import moment from "moment";
//import CustomerProfile from "./CustomerProfile";

function TableRow(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    props.handleClick(props.data.id);
  }
  return (
    <tr
      onClick={() => setIsClicked(!isClicked)}
      style={isClicked ? { backgroundColor: "yellow" } : null}
    >
      <th scope="row" />
      <td>{props.data.id}</td>
      <td>{props.data.title}</td>
      <td>{props.data.firstName}</td>
      <td>{props.data.surname}</td>
      <td>{props.data.email}</td>
      <td>{props.data.roomId}</td>
      <td>{props.data.checkInDate}</td>
      <td>{props.data.checkOutDate}</td>
      <td>
        {moment(props.data.checkOutDate).diff(props.data.checkInDate, "days")}
      </td>
      <td>
        <button className="btn btn-primary" onClick={handleClick}>
          Show Profile
        </button>
      </td>
    </tr>
  );
}
export default TableRow;
