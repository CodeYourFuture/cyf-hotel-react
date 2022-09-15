import React, { useEffect, useState } from "react";

function CustomerProfile({ id }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(
        result => {
          setIsLoaded(true);
          setCustomer(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id]);

  if (error) {
    return (
      <div className="error">
        <h2>Error: {error.message}</h2>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else {
    return customer ? (
      <div className="list-group">
        <li className="list-group-item active">Customer ID : {customer.id} </li>
        <li className="list-group-item">Email: {customer.email}</li>
        <li className="list-group-item">
          VIP: {String(customer.vip === true ? "Yes" : "No")}
        </li>
        <li className="list-group-item">
          Phone Number: {customer.phoneNumber}
        </li>
      </div>
    ) : null;
  }
}

export default CustomerProfile;
