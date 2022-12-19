import React, { useState } from "react";
import Moment from "react-moment";

function CreateRowTable({ customer, showProfile }) {
  const [select, setselect] = useState(false);

  function changeColour() {
    setselect(!select);
  }
  return (
    <tr
      style={{ backgroundColor: select ? "yellow" : "white" }}
      onClick={changeColour}
      // onDoubleClick={backColor}
    >
      <th scope="row">{customer.id}</th>
      <td>{customer.title}</td>
      <td>{customer.firstName}</td>
      <td>{customer.surname}</td>
      <td>{customer.email}</td>
      <td>{customer.roomId}</td>
      <td>
        <Moment format="DD-MM-YYYY">{customer.checkInDate}</Moment>
      </td>
      <td>
        <Moment format="DD-MM-YYYY">{customer.checkOutDate}</Moment>
      </td>
      <td>
        <Moment diff={customer.checkInDate} unit="days">
          {customer.checkOutDate}
        </Moment>
      </td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => showProfile(customer.id)}
        >
          show profile
        </button>
      </td>
    </tr>
  );
}
export default CreateRowTable;
