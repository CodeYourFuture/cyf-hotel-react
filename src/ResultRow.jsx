import React, { useState } from "react";
import moment from "moment";

const ResultRow = (props) => {
  // const [active, setActive] = useState(false);
  const result = props.result;
  const active = props.id === result.id;

  function changeId() {
    props.setID(result.id);
  }



 
  return (
    <tr scope="row" className={active ? "pink" : ""} onClick={changeId}>
      <td>{result.id}</td>
      <td>{result.title}</td>
      <td>{result.firstName}</td>
      <td>{result.surname}</td>
      <td>{result.email}</td>
      <td>{result.roomId}</td>
      <td>{result.checkInDate}</td>
      <td>{result.checkOutDate}</td>

      <td>
        {moment(result.checkOutDate).diff(moment(result.checkInDate), "days")}
      </td>
      <td>
        <button className="card-btn" onClick={() => props.removeBooking(result.id)}>
          Remove
        </button>
        {/* <button className="card-btn" onClick={changeId}>
          Show profile
        </button> */}
      </td>
    </tr>
  );
};

export default ResultRow;
