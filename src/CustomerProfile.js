import React, { useEffect, useState } from "react";

export default function CustomerProfile({ id }) {
  // console.log("CustomerProfile props:", id);
  const [clientData, setClientData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchClientData = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await fetch(
        `https://cyf-react.glitch.me/customers/${id}`
      );
      // console.log("fetchClientData response", response);
      if (!response.ok) {
        throw Error();
      }
      const data = await response.json();
      // console.log("fetchClientData data", data);
      setClientData(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchClientData();
    }
  }, [id]);

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {clientData && !loading && !error && (
        <>
          <h1>Customer Profile</h1>
          <h3>Customer ID: {clientData.id}</h3>
          <h3>
            Customer Name: {clientData.firstName} {clientData.surname}
          </h3>
          <h3>Customer Email: {clientData.email}</h3>
          <h3>Customer Phone Number: {clientData.phoneNumber}</h3>
          <h3>VIP : {clientData.vip ? "Yes" : "No"}</h3>
        </>
      )}
    </>
  );
}
