import React, { useState } from "react";
import "./TableRow.css";
import moment from "moment";

const TableRow = ({ customer, setCustomerId }) => {
  const [isSelected, setSelection] = useState(false);
  const changeColors = () => {
    setSelection(!isSelected);
  };
  const handleClick = event => {
    event.preventDefault();
    setCustomerId(customer.id);
  };
  return (
    <tr
      className={isSelected ? "yellow-background" : null}
      onClick={changeColors}
    >
      <td>{customer.id}</td>
      <td>{customer.title}</td>
      <td>{customer.firstName}</td>
      <td>{customer.surname}</td>
      <td>{customer.email}</td>
      <td>{customer.roomId}</td>
      <td>{customer.checkInDate}</td>
      <td>{customer.checkOutDate}</td>
      <td>
        {moment(customer.checkOutDate).diff(
          moment(customer.checkInDate),
          "days"
        )}
      </td>
      <td>
        {" "}
        <button onClick={handleClick}>Show Profile</button>
      </td>
    </tr>
  );
};

export default TableRow;
