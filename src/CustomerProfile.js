import React, { useState, useEffect } from "react";

export default function CustomerProfile({ id, setId }) {
  const [customer, setCustomer] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://temporary-cyf-react.onrender.com/customers/${id}`
      );
      const data = await response.json();
      setCustomer(data);
    }
    fetchData();
  }, [id]);
  return (
    <article className="customerProfile card" id="customerProfile">
      <ul className="list-group">
        <li className="list-group-item">ID : {customer.id}</li>
        <li className="list-group-item">email : {customer.email}</li>
        <li className="list-group-item">Phone : {customer.phoneNumber}</li>
        {customer.vip ? (
          <li className="list-group-item list-group-item-primary">VIP</li>
        ) : null}
        <li className="list-group-item">
          <button className="app-btn" onClick={() => setId("")}>
            Close
          </button>
        </li>
      </ul>
    </article>
  );
}
