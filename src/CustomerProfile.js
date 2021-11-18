import React, { useState, useEffect } from 'react'

const CustomerProfile = ({id, setCustomerId}) => {
    const [customer, setCustomer] = useState("");
    useEffect(() => {
        async function fetchCustomerData() {
            const response = await fetch(`https://omer-hotel-server.glitch.me/bookings/${id}`);
            const customerData = await response.json();
            setCustomer(customerData);
        }
        fetchCustomerData();
    }, [id])
    console.log(customer);
    return (
      <ul className="list-group">
        <li className="list-group-item">ID : {customer.id}</li>
        <li className="list-group-item">Name : {`${customer.firstName} ${customer.surname}`}</li>
        <li className="list-group-item">Email : {customer.email}</li>
        <li className="list-group-item">
          <button
            className="btn btn-primary"
            onClick={() => setCustomerId("")}
          >
            Close
          </button>
        </li>
      </ul>
    );
}

export default CustomerProfile
