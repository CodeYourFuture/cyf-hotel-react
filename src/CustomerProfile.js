import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [customerData, setCustomerData] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.illicitonion.com/customers/${props.profileId}`)
      .then(res => res.json())
      .then(data => setCustomerData(data));
  }, [props.profileId]);
  return (
    <ul className="customer-profile">
      <li>{customerData.id}</li>
      <li>{customerData.email}</li>
      {customerData.vip ? <li>{customerData.phoneNumber}</li> : null}
    </ul>
  );
};

export default CustomerProfile;
