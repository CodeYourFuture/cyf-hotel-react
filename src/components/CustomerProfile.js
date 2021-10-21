import React, { useState, useEffect } from "react";
//const[id,setId]

const CustomerProfile = props => {
  const [customerId, setCustomerId] = useState(0);
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [isVip, setIsVip] = useState(false);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setCustomerId(data.id);
          setCustomerEmail(data.email);
          setCustomerPhone(data.phoneNumber);
          setIsVip(data.vip);
        }
      });
  }, [props.id]);
  return (
    <div>
      <ul>
        <li> Id: {customerId}</li>
        <li> Email: {customerEmail}</li>
        {isVip ? <li> VIP Customer </li> : ""}
        <li>Phone {customerPhone}</li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
