import React, { useState, useEffect } from "react";

const CustomerProfile = (props) => {
  const [customerProfileData, setCustomerProfileData] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then((res) => res.json())
      .then((data) => setCustomerProfileData(data));
  }, [props.id]);

  return (
    <div className="customer-profile-container">
      <h3 className="font-weight-bold">Customer Profile</h3>
      <p className="font-weight-bold">
        Customer ID:{" "}
        <span className="font-weight-normal">{customerProfileData.id}</span>
      </p>
      <p className="font-weight-bold">
        Customer Name:{" "}
        <span className="font-weight-normal">
          {customerProfileData.title} {customerProfileData.firstName}{" "}
          {customerProfileData.surname}
        </span>
      </p>
      <p className="font-weight-bold">
        Customer Email:{" "}
        <span className="font-weight-normal">{customerProfileData.email}</span>
      </p>
      <p className="font-weight-bold">
        Customer Phone Number:{" "}
        <span className="font-weight-normal">
          {customerProfileData.phoneNumber}
        </span>
      </p>
      <p className="font-weight-bold">
        VIP :{" "}
        <span className="font-weight-normal">
          {customerProfileData.vip ? "Yes" : "No"}
        </span>
      </p>
    </div>
  );
};

export default CustomerProfile;

// This code is a React component called CustomerProfile. It imports the necessary dependencies from the React library:
//  React, useState, and useEffect. The component receives props as its parameter, which is an object containing data
// passed from its parent component. The component uses the useState hook to create a state variable called customerProfileData
// and a corresponding function called setCustomerProfileData. The initial value of customerProfileData is an empty string.
// The useEffect hook is used to perform a side effect, which in this case is fetching data from an API. It is triggered
// when the value of props.id changes. The effect makes an HTTP GET request to the specified URL (https://cyf-react.glitch.me/customers/${props.id}),
// retrieves the response, and converts it to JSON using the res.json() method. Then, it updates the value of customerProfileData
// by calling setCustomerProfileData with the fetched data. In the component's return statement, the fetched data is
// displayed within a <div> container with the class name "customer-profile-container". It includes several <p> elements
// that display different aspects of the customer's profile, such as ID, name, email, phone number, and VIP status.
// The data from customerProfileData is accessed using dot notation (e.g., customerProfileData.id, customerProfileData.title).
// Finally, the CustomerProfile component is exported as the default export, which allows it to be imported and used in
// other parts of the application.
