import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    props.id &&
      fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
        .then(res => res.json())
        .then(data => setCustomer(data));
  }, [props.id]);

  return (
    <>
      {customer.vip ? (
        <div className="col-sm-3">
          <h3>Customer {props.id} Profile</h3>
          <ul>
            <li>{customer.email}</li>
            <li>{customer.phoneNumber}</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CustomerProfile;
