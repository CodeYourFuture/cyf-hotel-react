import React from "react";
const CustomerProfile = ({ customerProfile }) => {
  return (
    <div className="user-profile">
      <h4>Customer Profile</h4>
      <section className="user-profile-container">
        <p>Customer Id : {customerProfile.id}</p>
        <p>Customer email : {customerProfile.email}</p>
        <p>VIP : {customerProfile.vip ? "Yes" : "No"}</p>
        <p>phone : {customerProfile.phoneNumber}</p>
      </section>
    </div>
  );
};
export default CustomerProfile;
