import moment from "moment";
import React, { useState } from "react";

const TableExtracted = ({ item, changeCustomerId }) => {
  const [state, setState] = useState();

  function highlightFn() {
    setState(state ? "" : "tableRow");
  }

  const buttonClickFn = () => {
    changeCustomerId(item.id);
  };

  return (
    <tr className={state} onClick={highlightFn} key={item.id}>
      <td> {item.id}</td>
      <td> {item.title}</td>
      <td> {item.firstName}</td>
      <td> {item.surname}</td>
      <td> {item.email}</td>
      <td> {item.roomId}</td>
      <td> {item.checkInDate}</td>
      <td> {item.checkOutDate}</td>
      <td>
        {moment(item.checkOutDate).diff(moment(item.checkInDate), "days")}
      </td>
      <td>
        <button onClick={buttonClickFn}> Show profile </button>
      </td>
    </tr>
  );
};

export default TableExtracted;
