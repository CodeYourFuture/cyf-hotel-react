import React, { useEffect, useState } from "react";
import "./CustomerProfile.css";
const CustomerProfile = ({ url }) => {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCustomerData([data]));
  }, [url]);
  if (customerData) {
    return customerData.map(({ id, email, vip }) => {
      return (
        <div className="profile-container" key={id}>
          <h2>Customer Profile</h2>
          <p>Customer ID: {id}</p>
          <p>Email: {email}</p>
          <p>Vip Status: {vip ? "Yes" : "No"}</p>
        </div>
      );
    });
  } else {
    return <h2>Loading Customer Profile...</h2>;
  }
};

export default CustomerProfile;
