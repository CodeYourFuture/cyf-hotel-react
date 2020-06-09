import React from "react";
import "./CustomerProfile.css";
import CloseIcon from "./images/icon-remove.svg";
const CustomerProfile = ({ id }) => {
  console.log("id : " + id);
  return (
    <div
      className={`customer-profile ${id !== -1 && "customer-profile-visible"}`}
    >
      <p>
        <img src={CloseIcon} alt="close" />
      </p>
      <p>Customer {id} Profile</p>
    </div>
  );
};

export default CustomerProfile;
