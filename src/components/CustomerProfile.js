import React, { useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const idCustomer = async id => {
    const resp = await fetch(`https://cyf-react.glitch.me/customers/${id}`);
    const data = await resp.json();
    return data;
  };

  useEffect(() => {
    idCustomer();
  }, [id]);

  return <div>CustomerProfile:{}</div>;
};

export default CustomerProfile;
