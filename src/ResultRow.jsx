import React, { useState } from "react";
import moment from "moment";

const ResultRow = (props) => {
  const [active, setActive] = useState(false);
  // console.log(active);
  const result = props.result;

  function handleRowClick() {
    setActive(!active);
  }

  function changeId() {
    props.setId(result.id);
  }
  return (
    <tr scope="row" className={active ? "pink" : ""} onClick={handleRowClick}>
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
        <button onClick={changeId}>Show profile</button>
      </td>
    </tr>
  );
};

export default ResultRow;
