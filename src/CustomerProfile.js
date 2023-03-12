import { useState, useEffect } from "react";

function CustomerProfile({ id }) {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      const response = await fetch(`https://cyf-react.glitch.me/customers/${id}`);
      const data = await response.json();
      setCustomer(data);
    };
    fetchCustomer();
  }, [id]);

  return (
    <div>
      {customer ? (
        <ul>
          <li>Customer ID: {customer.id}</li>
          <li>Email: {customer.email}</li>
          <li>VIP: {customer.vip ? "Yes" : "No"}</li>
          <li>Phone: {customer.phoneNumber}</li>
        </ul>
      ) : (
        <p>Please select a customer from the table.</p>
      )}
    </div>
  );
}

export default CustomerProfile;