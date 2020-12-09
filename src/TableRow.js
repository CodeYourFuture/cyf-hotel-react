import React, { useState } from "react";
// need to use  a state variable for each button to remmber id may be
function TableRow(props) {
  let customer = props.booking;
  // console.log("Hey I am customer"+customer)

  const [colorClass, setColorClass] = useState("red");
  // eslint-disable-next-line
  const [id, setId] = useState(customer.id);
  // eslint-disable-next-line
  const [number, setNumber] = useState(customer.phoneNumber); // eslint-disable-next-line
  // console.log("Hey i am from table row number"+customer.phoneNumber)
  // eslint-disable-next-line
  const [email, setEmail] = useState(customer.email);

  // setId(customer.id)

  function ChangeColor() {
    if (colorClass === "red") {
      green();
    } else {
      Red();
    }
  }

  function green() {
    setColorClass("green");
  }
  function Red() {
    setColorClass("red");
  }

  function handleClick() {
    props.handler(id, email, number);
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
      <td>
        {" "}
        <button onClick={handleClick} className="show-profile">
          show Profile
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
