import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [currentCustomer, setCurrentCustomer] = useState({});

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(res => setCurrentCustomer(res));
  }, [id]);
  const customerInfo = currentCustomer => {
    if (id) {
      let customerInfoSet = new Set(["id", "email", "vip", "phoneNumber"]);
      return (
        <div className="alert alert-primary">
          Customer {currentCustomer.id} Profile:
          <ul>
            {Object.keys(currentCustomer).map((key, index) => {
              if (customerInfoSet.has(key)) {
                return (
                  <li key={index}>
                    {key.toUpperCase()} :{" "}
                    {typeof currentCustomer[key] === "boolean"
                      ? currentCustomer[key]
                        ? "Yes"
                        : "No"
                      : currentCustomer[key]}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      );
    } else {
      return <p />;
    }
  };
  return id > 0 ? customerInfo(currentCustomer) : <p />;
};

export default CustomerProfile;
