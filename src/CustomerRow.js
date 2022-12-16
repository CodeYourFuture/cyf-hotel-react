import React, { useState } from "react";
import Moment from "react-moment";
const CustomerRow = ({ customer }) => {
  const [color, setColor] = useState(false);
  return (
    <tr
      key={customer.id}
      style={{ backgroundColor: `${color ? "blue" : "lightgreen"}` }}
      onClick={() => setColor(() => !color)}
    >
      <td>{customer.id}</td>
      <td>{customer.title}</td>
      <td>{customer.firstName}</td>
      <td>{customer.surname}</td>
      <td>{customer.email}</td>
      <td>Room No {customer.roomId}</td>
      <td>{customer.checkInDate}</td>
      <td>{customer.checkOutDate}</td>
      <td>
        <Moment diff={customer.checkInDate} unit="days">
          {customer.checkOutDate}
        </Moment>
      </td>
    </tr>
  );
};

export default CustomerRow;
