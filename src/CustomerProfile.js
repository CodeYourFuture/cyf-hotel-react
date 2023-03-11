import React, { useEffect, useState } from "react";

const CustomerProfile = (props) => {
  const [customer, setCustomer] = useState("");

  let id = props.id;

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then((response) => response.json())
      .then((data) => setCustomer(data))
      .catch((err) => console.log(err));
  }, [id]);
  if (customer.id) {
    return (
      <div className="booking-card">
        <h5>
          <em>Customer profile:</em>
        </h5>
        <p>Id: {customer.id}</p>
        <p>Email: {customer.email}</p>
        {customer.vip && <p>Phone number: {customer.phoneNumber}</p>}
      </div>
    );
  } else {
    return "";
  }
};

export default CustomerProfile;
