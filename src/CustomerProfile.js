import React, { useEffect } from "react";

const CustomerProfile = ({ id, customer, setCustomer }) => {
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => setCustomer(data));
  }, [id, setCustomer]);
  return (
    customer && (
      <div>
        <p>{`Customer ${id} Profile`}</p>
        <p>
          <b>Customer ID:</b> {customer.id}
        </p>
        <p>
          <b>Name:</b> {customer.firstName} {customer.surname}
        </p>
        <p>
          <b>Email:</b> {customer.email}
        </p>
        <p>
          <b>VIP:</b> {customer.vip ? `Yes` : `No`}
        </p>
        <p>
          <b>Phone Number:</b> {customer.phoneNumber}
        </p>
      </div>
    )
  );
};

export default CustomerProfile;
