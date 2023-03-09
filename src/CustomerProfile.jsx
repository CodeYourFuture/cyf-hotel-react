import React, { useState, useEffect } from "react";

const CustomerProfile = (props) => {
  const [customerData, setCustomerData] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then((res) => res.json())
      .then((data) => setCustomerData(data));
  }, [props.id]);

  return (
    <div className="customer-profile-container">
      <h3>Customer Profile</h3>
      <p>
        Customer ID: <span>{customerData.id}</span>
      </p>
      <p>
        Customer Name:{" "}
        <span>
          {customerData.title} {customerData.firstName} {customerData.surname}
        </span>
        Customer Email: <span>{customerData.email}</span>
      </p>
      <p>
        Customer Phone Number: <span>{customerData.phoneNumber}</span>
      </p>
      <p>
        VIP : <span>{customerData.vip ? "Yes" : "No"}</span>
      </p>
    </div>
  );
};

export default CustomerProfile;
