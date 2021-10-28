import React, { useEffect, useState } from "react";

const CustomerProfile = ({ profileId, resetCustomerProfileId }) => {
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

  if (profileId && customer) {
    return (
      <div className="profile-card card">
        <ul className="list-group">
          <li className="list-group-item">ID: {customer.id}</li>
          <li className="list-group-item">Email: {customer.email}</li>
          <li className="list-group-item">Phone: {customer.phoneNumber}</li>
          {customer.vip ? <li className="list-group-item">VIP</li> : null}
          <li className="list-group-item">
            <button
              className="btn btn-primary"
              onClick={() => resetCustomerProfileId("")}
            >
              Close
            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default CustomerProfile;
