import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  const [selectedCustomerData, setSelectedCustomerData] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setSelectedCustomerData(data);
      });
  }, [props.id]);

  return props.id !== "" ? (
    <div className="card mt-3 bg-dark" style={{ width: "27rem" }}>
      <div className="card-header bg-dark text-light">
        Customer-{props.id}-Profile
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Customer-Name: &nbsp; {selectedCustomerData.title}{" "}
          {selectedCustomerData.firstName}-{selectedCustomerData.surname}
        </li>
        <li className="list-group-item">
          Customer-ID: {selectedCustomerData.id}
        </li>
        <li className="list-group-item">
          Customer-Email: {selectedCustomerData.email}
        </li>
        <li className="list-group-item">
          Customer-phoneNumber: {selectedCustomerData.vip}
        </li>

        <li className="list-group-item">
          VIP: {selectedCustomerData.vip === true ? "YES" : "NO"}
        </li>
      </ul>
    </div>
  ) : (
    <div />
  );
}

export default CustomerProfile;
