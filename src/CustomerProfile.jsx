
import React, {useState, useEffect} from "react";

const CustomerProfile = ({ id }) => {
    const [customerData, setCustomerData] = useState(null); 

useEffect(() => {
    if (id) {
      fetch(`https://cyf-react.glitch.me/customers/${id}`)
        .then((response) => response.json())
        .then((data) => setCustomerData(data));
    }
  }, [id]);

  return (
    <div>
      {customerData ? (
        <div>
          <h2>Customer Profile: {id}</h2>
          <ul>
            <li>Email: {customerData.email}</li>
            <li>VIP: {customerData.vip ? "Yes" : "No"}</li>
            <li>Phone Number: {customerData.phoneNumber}</li>
          </ul>
        </div>
      ) : (
        <p>Loading customer profile...</p>
      )}
    </div>
  );
};

export default CustomerProfile;