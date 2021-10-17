import React, { useState, useEffect } from "react";

export default function CustomerProfile({ id }) {
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
    <article className="customerProfile">
      <ul>
        <li>ID : {person.id}</li>
        <li>email : {person.email}</li>
        <li>Phone : {person.phoneNumber}</li>
        {person.vip ? <li>VIP</li> : null}
      </ul>
    </article>
  );
}
