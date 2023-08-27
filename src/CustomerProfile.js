import { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [allCustomerData, setAllCustomerData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  function doFetchForCustomerProf() {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch customer data.");
        }
        return response.json();
      })
      .then((data) => {
        setAllCustomerData(data);
        setIsLoading(false);
        setErrorMessage(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
  }
  useEffect(() => {
    if (id) {
      doFetchForCustomerProf();
    }
  }, [id]);

  if (isLoading) {
    return <p>Please wait while the customer information is loading...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <div className="customer-card">
      <h2>Customer Profile Card</h2>
      <p>
        <b>Customer ID:</b> {allCustomerData.id}
      </p>
      <p>
        <b>Customer Name:</b> {allCustomerData.title}{" "}
        {allCustomerData.firstName} {allCustomerData.surname}
      </p>
      <p>
        <b>Customer email:</b> {allCustomerData.email}
      </p>
      <p>
        <b>Customer Phone Number:</b> {allCustomerData.phoneNumber}
      </p>
      <p>{allCustomerData.vip ? "vip" : "not vip"}</p>
    </div>
  );
};

export default CustomerProfile;
