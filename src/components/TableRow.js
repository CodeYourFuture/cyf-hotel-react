import React, { useState } from "react";
import moment from "moment";

const TableRow = customer => {
  const [isSelected, setIsSelected] = useState(false);

  const changeColor = () => {
    setIsSelected(!isSelected);
  };

  let checkInDate = moment(customer.customerdata.checkInDate);

  let checkOutDate = moment(customer.customerdata.checkOutDate);
  let nightStay = checkOutDate.diff(checkInDate, "days");
  return (
    <tr
      onClick={changeColor}
      className={isSelected ? "highlighted" : "primary"}
    >
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
