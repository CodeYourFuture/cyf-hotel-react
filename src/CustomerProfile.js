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
    <div>
      <h2>{allCustomerData.id}</h2>
      <p>{allCustomerData.title}</p>
      <p>{allCustomerData.firstName}</p>
      <p>{allCustomerData.surname}</p>
      <p>{allCustomerData.email}</p>
      <p>{allCustomerData.vip ? "vip" : "not vip"}</p>
      <p>{allCustomerData.phoneNumber}</p>
    </div>
  );
};

export default CustomerProfile;
