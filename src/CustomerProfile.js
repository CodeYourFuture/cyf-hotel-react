import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.customerId}`)
      .then(response => response.json())
      .then(data => setUserData(data));
  }, [props.customerId]);
  return (
    <div className="CustomerProfile">
      <h1 className="HeadingCustomerProfile">Customer {userData.id} Profile</h1>
      <ul className="CustomerProfileList">
        <li className="CustomerProfileDetails"> Id : {userData.id}</li>
        <li className="CustomerProfileDetails">
          Email address: {userData.email}{" "}
        </li>
        <li className="CustomerProfileDetails">VIP Status: {userData.vip}</li>
        <li className="CustomerProfileDetails">
          Phone Number: {userData.phonenumber}
        </li>
      </ul>
    </div>
  );
};
export default CustomerProfile;
