import React, { useState } from "react";
import moment from "moment";

const HighlightCustomerDetails = (props) => {
  const [active, setActive] = useState(false);
  const result = props.result;

  function handleRowClick() {
    setActive(!active);
  }
  
  return (
    <tr scope="row" className={active ? "yellow" : ""} onClick={handleRowClick}>
      {/* //    key={result.id}
//    onClick={() => clickedRows(index)}
//    className={selectedRows.includes(index) ? "newSelectedRows" : ""}
 > */}
      <th scope="row">{result.id}</th>
      <td>{result.title}</td>
      <td>{result.firstName}</td>
      <td>{result.surname}</td>
      <td>{result.email}</td>
      <td>{result.roomId}</td>
      <td>{result.checkInDate}</td>
      <td>{result.checkOutDate}</td>
      <td>{moment(result.checkOutDate).diff(result.checkInDate, "days")}</td>
      <td>
        <button className="btn btn-primary">Show profile</button>
      </td>
    </tr>
  );
};

export default HighlightCustomerDetails;
