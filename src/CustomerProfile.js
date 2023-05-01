import React from "react";
import Customers from "./data/customers.json";

const CustomerProfile = ({ customerId, isProfileOn }) => {
  if (isProfileOn) {
    return (
      <>
        {Customers.map(({ id, title, firstName, surname, email, tel, vip }) => {
          if (customerId === id) {
            return (
              <div className="customer-profile">
                <h2>{`${title} ${firstName} ${surname}`}</h2>
                <ul>
                  <li>
                    <strong>Phone Number:</strong>
                    {tel}
                  </li>
                  <li>
                    <strong>Email:</strong>
                    {email}
                  </li>
                  <li>
                    <strong>Customer ID:</strong>
                    {id}
                  </li>
                  <li>
                    <strong>VIP:</strong>
                    {vip ? "Yes" : "No"}
                  </li>
                </ul>
              </div>
            );
          }
        })}
      </>
    );
  }
};

export default CustomerProfile;
5;
