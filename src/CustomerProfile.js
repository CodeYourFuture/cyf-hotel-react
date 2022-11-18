import React, { useState, useEffect } from "react";

const CustomerProfile = ({ selectedIds }) => {
  // const [ customer, setCustomer ] = useState(selectedIds);
  const [cusInfo, setCusInfo] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${selectedIds}`)
      .then(res => res.json())
      .then(data => {
        setCusInfo(data);
      });
  }, [selectedIds]);

  return (
    <div>
      <p>Customer ID {selectedIds} profile</p>
      <p>Customer Email {cusInfo.email} </p>
      <p>Customer VIP {String(cusInfo.vip)}</p>
      <p>Customer Phone {cusInfo.phoneNumber}</p>
    </div>
  );
};

export default CustomerProfile;
