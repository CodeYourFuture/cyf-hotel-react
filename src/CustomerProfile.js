import React, { useState, useEffect } from "react";

const CustomerProfile = (props) => {
  const [customerData, setCustomerData] = useState("");

  useEffect(() => {
    fetch(`https://timeareich-hotel-server.glitch.me/bookings/${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        setCustomerData(data);
      })
      .catch((error) => {
        console.log(`There is an ${error}`);
      });
  }, [props.id]);
  return (
    <div className="customer-profile">
      <p>Customer {props.id} Profile</p>
      <p>{`${customerData.firstName} ${customerData.surname}`}</p>
      {customerData.vip ? <p>VIP</p> : ""}
      <p>{customerData.email}</p>
      <p>{customerData.phoneNumber}</p>
    </div>
  );
};
export default CustomerProfile;
