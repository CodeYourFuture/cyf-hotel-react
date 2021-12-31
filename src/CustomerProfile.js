import React from "react";
import { useState, useEffect } from "react";

function CustomerProfile(props) {
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setCustomerData(() => {
          return data;
        });
      });
  }, [props.id]);

  return (
    customerData && (
      <div>
        <p>
          Customer {customerData.id} profile
          <br /> Name : {customerData.title} {customerData.firstName}{" "}
          {customerData.surname}
          <br /> Email : {customerData.email}
          <br /> VIP status: {customerData.vip}
        </p>
      </div>
    )
  );
}

export default CustomerProfile;
