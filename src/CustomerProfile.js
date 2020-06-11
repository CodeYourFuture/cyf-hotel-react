import React from "react";

const CustomerProfile = props => {
  return (
    <div className="customer-profile">
      <h4>Customer Profile</h4>
      <ul>
        <li className="profile-items">
          Customer ID:{" "}
          <span className="customer-span">{props.customer.id}</span>
        </li>
        <li className="profile-items">
          Title: <span className="customer-span">{props.customer.title}</span>
        </li>
        <li className="profile-items">
          First name:{" "}
          <span className="customer-span">{props.customer.firstName}</span>
        </li>
        <li className="profile-items">
          Surname:{" "}
          <span className="customer-span">{props.customer.surname}</span>
        </li>
        <li className="profile-items">
          Email: <span className="customer-span">{props.customer.email}</span>
        </li>
        <li className="profile-items">
          STATUS:{" "}
          <span className="customer-span">
            {props.customer.vip ? "VIP" : "No"}
          </span>
        </li>
        <li className="profile-items">
          Phone number:{" "}
          <span className="customer-span">{props.customer.phoneNumber}</span>
        </li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
