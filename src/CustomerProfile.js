import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  const [customerProfile, setCustomerProfile] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setCustomerProfile(data);
      });
  }, [props.id]);

  return (
    <div>
      <ul>
        <li>
          {props.id ? <div>{`Customer ${props.id} Profile: `}</div> : <div />}
        </li>
        <li>Name:{customerProfile.firstName}</li>
        <li>Email:{customerProfile.email}</li>
        <li>Vip:{customerProfile.vip ? "Yes" : "No"}</li>
        <li>Phone number:{customerProfile.phoneNumber}</li>
      </ul>
    </div>
  );
}

export default CustomerProfile;
