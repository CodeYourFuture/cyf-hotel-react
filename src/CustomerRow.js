import React, { useState } from "react";
import Moment from "react-moment";

//sharing state
//why we need to share the state

// share the state using the props

const CustomerRow = ({ showProfile, customer }) => {
  const [color, setColor] = useState(false);

  const getProfile = () => {
    // showProfile(customer.id);
    fetch(`https://cyf-react.glitch.me/customers/${customer.id}`)
      .then(res => res.json())
      .then(data => showProfile(data));
  };

  return (
    <tr
      key={customer.id}
      style={{
        backgroundColor: `${color ? "blue" : "lightgreen"}`
      }}
      onClick={() => setColor(() => !color)}
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
        <Moment diff={customer.checkInDate} unit="days">
          {customer.checkOutDate}
        </Moment>
      </td>
      <td>
        <button onClick={getProfile}>Show profile</button>
      </td>
    </tr>
  );
};
//onClick={toggleProfile}
export default CustomerRow;
