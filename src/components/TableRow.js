import React, { useState } from "react";
import moment from "moment";
const TableRow = ({ customerData, setCustomerId }) => {
  const checkIn = customerData.checkInDate;
  const checkOut = customerData.checkOutDate;
  const duration = moment(checkOut).diff(checkIn, "days");

  const [rowActive, setRowActive] = useState(false);

  const changeRowColor = () => {
    setRowActive(!rowActive);
  };

  return (
    <tr onClick={changeRowColor} className={rowActive ? "row-color" : ""}>
      <th scope="row">{customerData.id}</th>
      <td>{customerData.title}</td>
      <td>{customerData.firstName}</td>
      <td>{customerData.surname}</td>
      <td>{customerData.email}</td>
      <td>{customerData.roomId}</td>
      <td>{checkIn}</td>
      <td>{checkOut}</td>
      <td>{duration} nights</td>
      <td>
        {" "}
        <button
          onClick={() => setCustomerId(customerData.id)}
          className="btn btn-primary"
        >
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
