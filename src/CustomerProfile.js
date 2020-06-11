import React from "react";
import "./CustomerProfile.css";
import CloseIcon from "./images/icon-remove.svg";
import VIPImage from "./images/vip-badge.jpg";

const CustomerProfile = ({ customer, onClose }) => {
  return (
    <div className="customer-profile">
      <div>
        <p onClick={onClose}>
          <img src={CloseIcon} alt="close" />
        </p>
      </div>
      <div>
        <p>Customer {customer.id} Profile</p>
        {customer.vip && (
          <p>
            <img src={VIPImage} alt="vip" className="vip-image" />
          </p>
        )}
        <p>
          {customer.title} {customer.firstName} {customer.surname}
        </p>
        <p>{customer.phoneNumber}</p>
        <p>{customer.email}</p>
      </div>
    </div>
  );
};

export default CustomerProfile;
