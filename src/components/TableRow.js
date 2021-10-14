import React, { useState } from "react";
import moment from "moment";

const TableRow = customer => {
  const [isSelected, setIsSelected] = useState([]);

  const changeColor = index => {
    index = customer.class;

    if (isSelected.includes(index)) {
      setIsSelected([]);
    } else setIsSelected(isSelected.concat(index));
  };

  let checkInDate = moment(customer.customerdata.checkInDate);

  let checkOutDate = moment(customer.customerdata.checkOutDate);
  let nightStay = checkOutDate.diff(checkInDate, "days");
  return (
    <tr
      onClick={() => changeColor(customer.class)}
      className={
        isSelected.includes(customer.class) ? "highlighted1" : "primary"
      }
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
