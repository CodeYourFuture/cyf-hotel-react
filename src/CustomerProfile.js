import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [customerInfo, setCustomerInfo] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => setCustomerInfo(data));
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>First Name</td>
            <td>Surname</td>
            <td>Email</td>
            <td>VIP</td>
            <td>Contact</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{customerInfo.id}</td>
            <td>{customerInfo.title}</td>
            <td>{customerInfo.firstName}</td>
            <td>{customerInfo.surname}</td>
            <td>{customerInfo.email}</td>
            <td>{customerInfo.vip ? "Yes" : "No"}</td>
            <td>{customerInfo.phoneNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerProfile;
