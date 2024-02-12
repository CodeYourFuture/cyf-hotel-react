import React, { useEffect, useState } from "react";

const CustomerProfile = ({ id }) => {
  const [customerInfo, setCustomerInfo] = useState("");
  useEffect(() => {
    fetch(`https://hotel-db-zeta.vercel.app/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.rows[0])
        setCustomerInfo(data.rows[0]);
      });
  }, [id]);
  return (
    <div>
      <h3>Customer {id} profile</h3>
      <ul>
        <li>Customer Email: {customerInfo.email}</li>
        <li>VIP: {customerInfo.vip ? "Yes" : "No"}</li>
        <li>Phone: {customerInfo.phoneNumber}</li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
