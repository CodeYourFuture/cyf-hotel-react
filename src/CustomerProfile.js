import React, { useState, useEffect } from "react";

const CustomerProfile = (props) => {
  const [customerData, setCustomerData] = useState("");

  console.log(props.id);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
