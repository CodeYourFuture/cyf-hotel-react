import React, { useEffect, useState } from "react";

export default function CustomerProfile({ id }) {
  const [customerData, setCustomerData] = useState({});
  const apiURL = "https://cyf-olus-quote-server.glitch.me/bookings/customer/";

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${apiURL}${id}`, { mode: "cors" });
        const data = await response.json();

        console.log(await data);
        setCustomerData(await data);
        console.log(customerData, "customer data");
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [id]);

  return (
    <div>
      <h4>
        Customer <strong>{id}</strong> Profile
      </h4>

      <ul style={{ listStyle: "none" }}>
        <li>
          <em>Full Name: </em>
          {customerData.title} {customerData.firstName} {customerData.surname}
        </li>
        <li>
          <em>Phone: </em>
          {customerData.phoneNumber}
        </li>
        <li>
          <em>Email: </em>
          {customerData.email}
        </li>

        {customerData.vip && (
          <li>
            <strong>VIP customer</strong>
          </li>
        )}
      </ul>
    </div>
  );
}
