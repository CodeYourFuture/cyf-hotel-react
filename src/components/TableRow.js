import React, { useState } from "react";
import moment from "moment";

const TableRow = customer => {
  //  let colo = customer.className;
  const [isActive, setActive] = useState(false);

  const changeColor = () => {
    setActive(!isActive);
  };

  let checkInDate = moment(customer.customerdata.checkInDate);
  // console.log(checkInDate);
  let checkOutDate = moment(customer.customerdata.checkOutDate);
  let nightStay = checkOutDate.diff(checkInDate, "days");
  return (
    <tr onClick={changeColor} className={isActive ? "ap" : "red"}>
      <td>{customer.customerdata.id}</td>
      <td>{customer.customerdata.title}</td>
      <td>{customer.customerdata.firstName}</td>
      <td>{customer.customerdata.surname}</td>
      <td>{customer.customerdata.email} </td>
      <td>{customer.customerdata.roomId}</td>
      <td>{customer.customerdata.checkInDate}</td>
      <td>{customer.customerdata.checkOutDate}</td>
      <td>{nightStay}</td>
    </tr>
  );
};
export default TableRow;
