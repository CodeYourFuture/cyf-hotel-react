import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [customerData, setCustomerData] = useState({});
  console.log(customerData);
  const [requestOption, setRequestOption] = useState("GET");

  // console.log(props.className);
  useEffect(() => {
    fetch(
      `https://cyf-nader-hotel-server.herokuapp.com/bookings/${props.profileId}`
    )
      .then(res => res.json())
      .then(data => setCustomerData(data));
  }, [props.profileId]);
  return (
    <ul className={props.className}>
      <li>{customerData.id}</li>
      <li>{customerData.firstName}</li>
      <li>{customerData.surname}</li>
      <li>{customerData.email}</li>
      {customerData.vip ? <li>{customerData.phoneNumber}</li> : null}
    </ul>
  );
};

export default CustomerProfile;
