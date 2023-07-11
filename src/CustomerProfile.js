import { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [allCustomerData, setAllCustomerData] = useState();

  function doFetchForCustomerProf() {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then((response) => response.json())
      .then((data) => setAllCustomerData(data))
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    if (id) {
      doFetchForCustomerProf();
    }
  }, [id]);
  console.log(allCustomerData);
  if (!allCustomerData) {
    return null;
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
