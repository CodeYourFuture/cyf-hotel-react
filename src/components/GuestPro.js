import React, { useState, useEffect } from "react";

const GuestPro = props => {
  const [guest, setGuest] = useState(null);

  console.log("hey" + props.id);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setGuest(data);
      });
  }, [props.id]);

  if (guest) {
    if (guest.vip && guest.phoneNumber) {
      return (
        <div id="profile">
          <table className="guest">
            <th>{`Guest ${props.id} profile`}</th>
            <td>{`ID: ${guest.name}`}</td>
            <td>{`Email: ${guest.email}`}</td>
          </table>
        </div>
      );
    } else {
      return (
        <div>
          Sorry this customer is not VIP or there is no recorded phone number
        </div>
      );
    }
  } else {
    return null;
  }
};

export default GuestPro;
