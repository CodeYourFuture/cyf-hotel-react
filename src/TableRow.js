import React, { useState } from "react";

function TableRow(props) {
  console.log(props.booking.id);
  let customer = props.booking;

  const [colorClass, setColorClass] = useState("red");

  function ChangeColor() {
    console.log("Yes I was clicked mann " + colorClass);
    if (colorClass === "red") {
      green();
    } else {
      Red();
    }
    console.log("Now I am " + colorClass);
  }

  function green() {
    setColorClass("green");
  }
  function Red() {
    setColorClass("red");
  }
  return (
    <tr className={colorClass} onClick={ChangeColor}>
      <th scope="row">{customer.id}</th>
      <td>{customer.title}</td>
      <td>{customer.firstName}</td>
      <td>{customer.surname}</td>
      <td>{customer.email}</td>
      <td>{customer.roomId}</td>
      <td>{customer.checkInDate}</td>
      <td>{customer.checkOutDate}</td>
    </tr>
  );
}

export default TableRow;
