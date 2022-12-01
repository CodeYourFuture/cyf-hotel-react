import React from "react";
const CustomerProfile = ({ selectedProfileId, customerProfile }) => {
  return (
    <div>
      {selectedProfileId ? (
        <div>
          <span>{`${customerProfile.title} ${customerProfile.firstName} ${
            customerProfile.surname
          }`}</span>
          <span>{customerProfile.email}</span>
          <span className={customerProfile.vip ? "vip" : "notVip"}>
            {customerProfile.vip ? "Customer is VIP" : "Not a VIP customer"}
          </span>
          <span>{customerProfile.phoneNumber}</span>
        </div>
      ) : (
        <span />
      )}
    </div>
  );
};
export default CustomerProfile;
