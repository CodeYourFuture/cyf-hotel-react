import React, { useState } from "react";
import moment from "moment";
// import CustomerProfile from "./CustomerProfile";

const TableRowEach = props => {
  const [rowsSelected, setRowsSelected] = useState(false);
  function rowsSelector() {
    setRowsSelected(!rowsSelected);
  }

  return (
    <tr
      id={props.entry.id}
      onClick={rowsSelector}
      className={rowsSelected ? "highlight" : ""}
    >
      <td>{props.entry.id}</td>
      <td>{props.entry.title}</td>
      <td>{props.entry.firstName}</td>
      <td>{props.entry.surname}</td>
      <td>{props.entry.email}</td>
      <td>{props.entry.roomId}</td>
      <td>{props.entry.checkInDate}</td>
      <td>{props.entry.checkOutDate}</td>
      <td>
        {moment(props.entry.checkOutDate, "YYYY/MM/DD").diff(
          moment(props.entry.checkInDate, "YYYY/MM/DD"),
          "days"
        )}
      </td>
      <td>
        <button
          className="button"
          id={props.entry.id}
          onClick={e => {
            // e.preventDefault();
            let customerProfileId = props.entry.id;
            console.log(customerProfileId);
            props.idSetter(e, customerProfileId);
          }}
        >
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default TableRowEach;
