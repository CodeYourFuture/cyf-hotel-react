import React, { useState, useEffect } from "react";

export default function CustomerProfile({ customerID, showProfile }) {
  const [customerData, setCustomerData] = useState({});
  const apiURL = "https://cyf-react.glitch.me/customers/";
  useEffect(() => {
    fetch(`${apiURL}${customerID}`)
      .then(function(response) {
        return response.json();
      })
      .then(data => setCustomerData(data));
  }, [customerID]);
  return (
    showProfile && (
      <div className="card">
        <div className="card-body">
          <h4 className="title text-red">{customerData.vip ? "VIP" : ""}</h4>
          <h5 className="card-title">
            {customerData.title} {customerData.firstName} {customerData.surname}
          </h5>
          <p className="card-text">{customerData.phoneNumber}</p>
          <p className="card-text">{customerData.email}</p>
        </div>
      </div>
    )
  );
}
