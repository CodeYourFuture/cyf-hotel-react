import React, { useEffect, useState } from "react";

const CustomerProfile = ({ id }) => {
  const [customerDetails, setCustomerDetails] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => setCustomerDetails(data));
  }, [id]);

  console.log(customerDetails);

  return (
    <div>
      <ul id="customerInfo">
        <li>Title: {customerDetails.title}</li>
        <li>First Name: {customerDetails.firstName}</li>
        <li>Surname: {customerDetails.surname} </li>
        <li>Email: {customerDetails.email} </li>
        <li>Phone: {customerDetails.phoneNumber} </li>
        <li>VIP: {customerDetails.vip ? "Yes" : "No"}</li>
      </ul>
    </div>
  );
};
export default CustomerProfile;
