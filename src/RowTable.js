import React, { useState } from "react";
import moment from "moment";
function RowTable(props) {
  const [clicked, setClicked] = useState("not-selected");
  function setClassName() {
    if (clicked == "selected") {
      setClicked("not-selected");
    } else {
      setClicked("selected");
    }
  }

  function showProfile(event) {
    props.selectCustomer(props.book.id);
  }
  return (
    <tr key={props.book.id} className={clicked} onClick={setClassName}>
      <th scope="row">{props.book.id}</th>
      <td>{props.book.title}</td>
      <td>{props.book.firstName}</td>
      <td>{props.book.surname}</td>
      <td>{props.book.email}</td>
      <td>{props.book.roomId}</td>
      <td>{props.book.checkInDate}</td>
      <td>{props.book.checkOutDate}</td>
      <td>
        {moment(props.book.checkOutDate).diff(
          moment(props.book.checkInDate),
          "days"
        )}
      </td>
      <td>
        <button className="btn btn-primary" onClick={showProfile}>
          Show Profile
        </button>
      </td>
    </tr>
  );
}
export default RowTable;
