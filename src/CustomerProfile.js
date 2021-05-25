import React, { useEffect, useState } from "react";

function CustomerProfile(props) {
  if (props.selectedId) {
    const [customerData, setCustomerData] = useState("");

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(`https://cyf-react.glitch.me/customers/${props.selectedId}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(
              `Encountered something unexpected: ${response.status}`
            );
          }
        })
        .then(
          data => {
            setCustomerData(data);
            setLoading(false);
          },
          error => {
            setError(error);
            setLoading(false);
          }
        );
    }, [props.selectedId]);

    return (
      <div className="customer-info">
        <ul>
          <li>
            <b>ID: </b>
            {loading ? "Loading..." : error ? error.message : customerData.id}
          </li>
          <li>
            <b>Email: </b>
            {loading
              ? "Loading..."
              : error
              ? error.message
              : customerData.email}
          </li>
          <li>
            <b>VIP: </b>
            {loading
              ? "Loading..."
              : error
              ? error.message
              : customerData.vip
              ? "Yes"
              : "No"}
          </li>
          <li>
            <b>Phone Number: </b>
            {loading
              ? "Loading..."
              : error
              ? error.message
              : customerData.phoneNumber}
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default CustomerProfile;
