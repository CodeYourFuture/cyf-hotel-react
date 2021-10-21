import React, { useEffect, useState } from "react";

const CustomerProfile = ({ profileId }) => {
  const [customer, setCustomer] = useState();

  useEffect(() => {
    if (profileId) {
      fetch(`https://cyf-react.glitch.me/customers/${profileId}`)
        .then(res => res.json())
        .then(data => {
          setCustomer(data);
        });
    }
  }, [profileId]);

  if (customer) {
    return (
      <div>
        <ul>
          <li>{customer.id}</li>
          <li>{customer.email}</li>
          <li>{customer.vip}</li>
          <li>{customer.phoneNumber}</li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default CustomerProfile;
