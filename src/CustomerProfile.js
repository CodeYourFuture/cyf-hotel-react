import React from "react";
import Customers from "./data/customers.json";

const CustomerProfile = ({ customerId, isProfileOn, setProfileOn }) => {
  if (!isProfileOn) {
    return null;
  }

  const { title, firstName, surname, email, tel, vip } = Customers.find(
    (customer) => customer.id === customerId
  );

  return (
    <div className="customer-profile">
      <div className="profile-section">
        <h1>{`${title} ${firstName} ${surname}`}</h1>
        <button
          onClick={() => {
            setProfileOn(false);
          }}
          className="x-button"
        >
          X
        </button>
      </div>
      <ul>
        <li>
          <strong>Phone Number:</strong>
          {tel}
        </li>
        <li>
          <strong>Email:</strong>
          {email}
        </li>
        <li>
          <strong>Customer ID:</strong>
          {customerId}
        </li>
        <li>
          <strong>VIP:</strong>
          {vip ? "Yes" : "No"}
        </li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
