import React, { useState, useEffect } from "react";

export default function CustomerProfile({ id, setCustomerProfileId }) {
  const [person, setPerson] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://cyf-react.glitch.me/customers/${id}`
      );
      const data = await response.json();
      setPerson(data);
    }
    fetchData();
  }, [id]);
  return (
    <article className="customerProfile card">
      <ul className="list-group">
        <li className="list-group-item">ID : {person.id}</li>
        <li className="list-group-item">email : {person.email}</li>
        <li className="list-group-item">Phone : {person.phoneNumber}</li>
        {person.vip ? (
          <li className="list-group-item list-group-item-primary">VIP</li>
        ) : null}
        <li className="list-group-item">
          <button
            className="btn btn-primary"
            onClick={() => setCustomerProfileId("")}
          >
            Close
          </button>
        </li>
      </ul>
    </article>
  );
}
