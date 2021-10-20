import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customerData, setCustomerData] = useState([]);
  useEffect(() => {
    if (props.id) {
      fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
        .then(res => res.json())
        .then(fetchedCustomerData => setCustomerData(fetchedCustomerData))
        .catch(err => console.log(err));
    }
  }, [props.id]);
  return (
    <div>
      {customerData.id && (
        <div>
          <p>customer ID: {customerData.id}</p>
          <p>customer Email: {customerData.email}</p>
          <p>customer Phone : {customerData.phoneNumber}</p>
          {customerData.vip ? <p>A VIP customer</p> : <p>Not a VIP customer</p>}
        </div>
      )}
    </div>
  );
};

export default CustomerProfile;
