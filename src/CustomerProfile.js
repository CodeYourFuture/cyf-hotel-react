import React from "react";
import { useState, useEffect } from "react";

const CustomerProfile = ({ customerId }) => {
  const [customerData, setCustomerData] = useState({});
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const getCustomer = async () => {
      const customerProfileFromServer = await fetchCustomers();
      setCustomerData(customerProfileFromServer);
      setIsloading(false);
    };
    getCustomer();
  }, [customerId]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchCustomers = async () => {
    const res = await fetch(
      `https://cyf-react.glitch.me/customers/${customerId}`
    );
    const data = await res.json();

    return data;
  };

  return (
    <div className="card w-25 d-flex ml-2 pl-2 pt-2">
      <h1>Customer Profile</h1>
      {isloading ? (
        <p>Profile is loading...</p>
      ) : (
        <h3 className="mt-3">
          {customerData.title} {customerData.firstName} {customerData.surname}
        </h3>
      )}
      <ul className="list-unstyled mt-3">
        <li className="mt-2">Customer id: {customerData.id}</li>
        <li className="mt-2">email: {customerData.email}</li>
        <li className="mt-2">Phone number: {customerData.phoneNumber}</li>
        <li className="mt-2">
          VIP status: {customerData.vip ? "active" : "not active"}
        </li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
