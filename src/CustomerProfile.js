import React, { useEffect } from "react";

const CustomerProfile = ({ id, setId, customer, setCustomer, urlToFetch }) => {
  useEffect(() => {
    fetch(`${urlToFetch}/bookings/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCustomer(data);
      });
  }, [id, setCustomer, urlToFetch]);
  return (
    customer && (
      <div>
        <button onClick={() => setId(null)}>x</button>
        <p>{`Customer ${id} Profile`}</p>
        <p>
          <b>Customer ID:</b> {customer.id}
        </p>
        <p>
          <b>Name:</b> {customer.firstName} {customer.surname}
        </p>
        <p>
          <b>Email:</b> {customer.email}
        </p>
      </div>
    )
  );
};

export default CustomerProfile;
