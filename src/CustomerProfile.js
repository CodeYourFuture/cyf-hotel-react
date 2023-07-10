import React, { useState, useEffect } from "react";

const CustomerProfile = (props) => {
  const [customerProfileData, setCustomerProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setCustomerProfileData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [props.id]);

  if (isLoading) {
    return <div>Loading customer profile...</div>;
  }

  if (!customerProfileData) {
    return null; // or render a message indicating that the customer profile is not available
  }

  return (
    <div className="customer-profile-container">
      <h3 className="font-weight-bold">Customer Profile</h3>
      <p className="font-weight-bold">
        Customer ID:{" "}
        <span className="font-weight-normal">{customerProfileData?.id}</span>
      </p>
      <p className="font-weight-bold">
        Customer Name:{" "}
        <span className="font-weight-normal">
          {customerProfileData?.title} {customerProfileData?.firstName}{" "}
          {customerProfileData?.surname}
        </span>
      </p>
      <p className="font-weight-bold">
        Customer Email:{" "}
        <span className="font-weight-normal">{customerProfileData?.email}</span>
      </p>
      <p className="font-weight-bold">
        Customer Phone Number:{" "}
        <span className="font-weight-normal">
          {customerProfileData?.phoneNumber}
        </span>
      </p>
      <p className="font-weight-bold">
        VIP :{" "}
        <span className="font-weight-normal">
          {customerProfileData?.vip ? "Yes" : "No"}
        </span>
      </p>
    </div>
  );
};

export default CustomerProfile;

// This code is a React component called CustomerProfile. The component imports the necessary
// dependencies, React, useState, and useEffect, from the "react" library. The CustomerProfile
// component is defined as a functional component using an arrow function. Inside the component,
// two state variables are declared using the useState hook: customerProfileData represents the
// customer profile information and is initialized as null. isLoading is a boolean flag that indicates
// whether the data is still loading and is initialized as true. The useEffect hook is used to fetch
// the customer profile data from the server when the component is rendered or when the props.id
// value changes. It sets the isLoading flag to true to indicate that the data is being loaded.

// Inside the useEffect hook, a fetch request is made to the specified URL
// (https://cyf-react.glitch.me/customers/${props.id}) to fetch the customer profile data. The
// response is checked for errors, and if there are none, the response is parsed as JSON using the
// res.json() method. If the data is successfully retrieved, the setCustomerProfileData function is
// called to update the customerProfileData state variable with the fetched data, and the isLoading
// flag is set to false to indicate that the data loading is complete. If there is an error during
// the fetch request or parsing the response, the error is logged to the console, and the isLoading
// flag is set to false. The component checks the value of isLoading. If it is true, a loading message
// is displayed: <div>Loading customer profile...</div>.

// If customerProfileData is null, the component returns null, indicating that the customer profile
// is not available. This can be modified to render a message indicating the absence of customer
// profile data. If the data is loaded and customerProfileData is not null, the component renders
// the customer profile information in an HTML structure. The customer profile is displayed with the
// customer ID, name, email, phone number, and a flag indicating if the customer is a VIP. The values
// are accessed from the customerProfileData object using optional chaining (?.) to handle cases where
// the data is not yet available. Finally, the CustomerProfile component is exported as the default
// export of the module, allowing it to be imported and used in other parts of the application.
