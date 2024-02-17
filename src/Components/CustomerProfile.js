import React, { useEffect, useState } from "react";

const CustomerProfile = (props) => {
  const [customerData, setCustomerData] = useState(null); // Initialize customerData as null

  useEffect(() => {
    if (props.id) {
      fetch(`https://andrius-hotel-server.onrender.com/bookings/${props.id}`)
        .then((response) => response.json())
        .then((data) => setCustomerData(data))
        .catch((error) =>
          console.error("Error fetching customer data:", error)
        );
    }
  }, [props.id]);

  if (!customerData) {
    return <p>Loading...</p>; // Display loading message while fetching data
  }

  // Assuming customerData is an array
  const customer = customerData[0]; // Assuming the data for the customer is at the first index of the array

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Customer ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">VIP</th>
          <th scope="col">Phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{props.id}</th>
          <td>{customer.title}</td>
          <td>{customer.firstName}</td>
          <td>{customer.surname}</td>
          <td>{customer.email}</td>
          <td>{customer.vip ? "Yes" : "No"}</td>
          <td>{customer.phoneNumber}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CustomerProfile;
