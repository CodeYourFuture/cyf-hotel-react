import React from "react";

const CustomerProfile = ({ customerData }) => {
  return (
    <ul className="customer-profile lg-col-10 display-show">
      <li>{customerData._id}</li>
      <li>{customerData.firstName}</li>
      <li>{customerData.surname}</li>
      <li>{customerData.email}</li>
      <li>{customerData.checkInDate}</li>
      <li>{customerData.checkOutDate}</li>
      {customerData.vip ? <li>{customerData.phoneNumber}</li> : null}
    </ul>
  );
};

export default CustomerProfile;
