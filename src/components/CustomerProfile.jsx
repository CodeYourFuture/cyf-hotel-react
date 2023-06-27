import React, { useEffect, useState } from "react";

const CustomerProfile = ({ id }) => {
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then((response) => response.json())
      .then((data) => setCustomerData(data))
  }, [id]);

  return (
    <div>
      {customerData && (
        <div>
          <h3>Customer {id} Profile</h3>
          <ul>
            <li>ID: {customerData.id}</li>
            <li>Email: {customerData.email}</li>
            <li>VIP: {customerData.vip ? "Yes" : "No"}</li>
            <li>Phone: {customerData.phoneNumber}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomerProfile;
