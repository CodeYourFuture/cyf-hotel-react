import React, { useState, useEffect } from "react";

const CustomerProfile = (props) => {
  const [customerProfileData, setCustomerProfileData] = useState("");

   useEffect(() => {
     fetch(`https://cyf-react.glitch.me/customers/${props.customerId}`)
       .then((res) => res.json())
       .then((data) => setCustomerData(data))
       .catch((err) => console.log(err));
   }, [props.customerId]);

  return customerData ? (
    <div>
      <p>Customer {props.customerId} Profile</p>
      <ul>
        <li>Customer ID:{customerData.id}</li>
        <li>Vip:{customerData.vip ? "Yes" : "no"}</li>
        <li>Customer Email:{customerData.email}</li>
        <li>Customer Phone Number:{customerData.phoneNumber}</li>
      </ul>
    </div>
  ) : (
    <p />
  );
};

export default CustomerProfile;
