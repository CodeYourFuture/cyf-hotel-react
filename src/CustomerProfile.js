import React, { useEffect, useState } from "react";

function CustomerProfile({ id }) {
  const [customerInfo, setCustomerInfo] = useState({});
  useEffect(() => {
    if (!id == 0) {
      fetch(`https://cyf-react.glitch.me/customers/${id}`)
        .then(res => res.json())
        .then(data => setCustomerInfo(data));
    }
  }, [id]);

  if (id != 0) {
    return (
      <div>
        <h3>Customer Profile</h3>
        <ul className="ul-styling">
          <li>Cutomer ID: {customerInfo.id}</li>
          <li>Email ID: {customerInfo.email}</li>
          <li>Cutomer Type: {customerInfo.vip ? "VIP" : "Non-VIP"}</li>
          <li>Phone Number: {customerInfo.phoneNumber}</li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default CustomerProfile;
