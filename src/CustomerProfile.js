import React, { useEffect, useState } from "react";

function CustomerProfile(props) {
  if (props.selectedId) {
    const [customerData, setCustomerData] = useState("");

    useEffect(() => {
      fetch(`https://cyf-react.glitch.me/customers/${props.selectedId}`)
        .then(response => response.json())
        .then(data => setCustomerData(data));
    }, [props.selectedId]);

    return (
      <div className="customer-info">
        <ul>
          <li>
            <b>ID: </b>
            {customerData.id}
          </li>
          <li>
            <b>Email: </b>
            {customerData.email}
          </li>
          <li>
            <b>VIP: </b>
            {customerData.vip ? "Yes" : "No"}
          </li>
          <li>
            <b>Phone Number: </b>
            {customerData.phoneNumber}
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default CustomerProfile;
