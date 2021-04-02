import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [custData, setCustData] = useState();

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => {
        setCustData(custData => data);
      })
      .catch(error => console.log(error));
  }, [id]);
  if (custData) {
    return (
      <div>
        <h3>Customer {id} Profile</h3>
        <p>
          Customer Name: {custData.title} {custData.firstName}{" "}
          {custData.surname}
        </p>
        <p>VIP: {custData.vip ? "Yes " : "No"}</p>
        <p>Email. {custData.email}</p>
        <p>Contact NUmber: {custData.phoneNumber}</p>
      </div>
    );
  } else {
    return <div>NO Customer data</div>;
  }
};

export default CustomerProfile;
