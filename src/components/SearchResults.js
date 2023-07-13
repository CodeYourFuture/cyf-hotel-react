import React, { useEffect, useState } from "react";

const SearchResults = ({ bookings }) => {
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const handleShowProfile = (customerId) => {
    setSelectedCustomerId(customerId);
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleShowProfile(booking.id)}
                >
                  Show profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCustomerId && (
        <CustomerProfile customerId={selectedCustomerId} />
      )}
    </div>
  );
};

const CustomerProfile = ({ customerId }) => {
  const [customerData, setCustomerData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://cyf-react.glitch.me/customers/${customerId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch customer data");
        }
        return response.json();
      })
      .then((data) => {
        setCustomerData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [customerId]);

  return (
    <div>
      {isLoading ? (
        <p>Loading customer profile...</p>
      ) : (
        <div>
          <h2>Customer Profile</h2>
          {customerData ? (
            <ul>
              <li>ID: {customerData.id}</li>
              <li>Email: {customerData.email}</li>
              <li>VIP: {customerData.vip ? "Yes" : "No"}</li>
              <li>Phone: {customerData.phoneNumber}</li>
            </ul>
          ) : (
            <p>Unable to fetch customer profile.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;