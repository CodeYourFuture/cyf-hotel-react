import React, { useState, useEffect } from "react";
// import React from "react";

const CustomerProfile = ({ url }) => {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    console.log("Fetching data from Customers");

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCustomer([data]);
      });
  }, [url]);

  if (customer) {
    return customer.map(({ id, email, vip }) => {
      return (
        <div className="profile-container" key={id}>
          <h2>Customer {id} Profile</h2>
          <ul>
            <li>Customer ID : {id}</li>
            <li>Email : {email}</li>
            <li>VIP Status : {vip ? "Yes" : "No"}</li>
          </ul>
        </div>
      );
    });
  }
};

export default CustomerProfile;
