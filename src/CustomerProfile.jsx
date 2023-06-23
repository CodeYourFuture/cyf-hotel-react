import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState("");
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCustomer(data);
      });
  }, [props.id]);

  return (
    <>
      {customer.id ? (
        <div className="customer-profile">
          <p className="customer-id"> Customer {props.id} Profile</p>
          <ul>
            <li>{customer.email}</li>
            <li>{customer.phoneNumber}</li>
            <li>VIP: {customer.vip ? "Yes " : "No"}</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CustomerProfile;
