import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    // console.log("Fetching data from NASA");

    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setCustomerData(data);
      });
  }, [props.id]);

  return (
    <div>
      {customerData ? (
        <ul>
          <li>Customer ID: {customerData.id}</li>
          <li>Email: {customerData.email}</li>
          <li>VIP: {customerData.vip ? "Yes" : "No"}</li>
          <li>Phone number: {customerData.phoneNumber}</li>
        </ul>
      ) : null}
    </div>
  );
};
export default CustomerProfile;
