import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customerProfile, setCustomerProfile] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.customerID}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setCustomerProfile(data);
      })
      .catch(error => {
        console.log(`ERROR - ${error}`);
      });
  }, [props.customerID]);

  // this will get an id through props.customerID
  // then display the correct profile that corresponds
  // with that id.
  return props.customerID !== null ? (
    <>
      <h1>Customer Profile:</h1>
      <p>{`Customer ID: ${customerProfile.id}`}</p>
      <p>{`Customer Email: ${customerProfile.email}`}</p>
      <p>
        {customerProfile.vip
          ? "This customer is a VIP"
          : "This customer is not a VIP"}
      </p>
      <p>{`Customer Number ${customerProfile.phoneNumber}`}</p>
    </>
  ) : (
    <></>
  );
};
export default CustomerProfile;
