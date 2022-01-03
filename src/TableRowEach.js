import React, { useState } from "react";
import moment from "moment";
// import CustomerProfile from "./CustomerProfile";
// import SearchResults from "./SearchResults";

const TableRowEach = props => {
  const [rowsSelected, setRowsSelected] = useState(false);
  function rowsSelector() {
    setRowsSelected(!rowsSelected);
  }

  const handleClick = event => {
    let customerProfileID = event.target.value;
    return customerProfileID;
    //  setProfileID(customerProfileID);
    //  console.log(customerProfileID);
  };

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
        <button value={props.entry.id} onClick={handleClick}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default TableRowEach;
