import React, { useState, useEffect } from "react";

function CustomerProfile({ id }) {
  const [customerDetails, setCustomerDetails] = useState({});
  useEffect(() => {
    fetch(`https://hotel-app-express-for-react.glitch.me/bookings/${id}`)
      .then(res => res.json())
      .then(data => {
        setCustomerDetails(data);
      });
    console.log(customerDetails);
  }, [id]);
  return (
    <div>
      <h2>Customer {customerDetails.id} profile</h2>
      <p>
        {customerDetails.title} {customerDetails.firstName}{" "}
        {customerDetails.surname}
      </p>
      {customerDetails.vip ? <p>Vip</p> : null}
      <p>Contact:{customerDetails.phoneNumber}</p>
      <p>Email: {customerDetails.email}</p>
    </div>
  );
}
export default CustomerProfile;
