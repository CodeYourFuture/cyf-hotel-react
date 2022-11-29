import { React, useState, useEffect } from "react";

export default function CustomerProfile(props) {
  const [customerDetails, setCustomerDetails] = useState({});

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setCustomerDetails(data);
      });
  }, [props.id]); // Always remember to put an empty array here!
  // console.log(customerDetails);
  return (
    <div>
      <p>Customer {props.id} Profiles </p>
      {/* <p>
        {Object.entries(customerDetails).map(elm => (
          <li>
            {elm[0].charAt(0).toUpperCase() + elm[0].slice(1)}: {String(elm[1])}
          </li>
        ))}
      </p> */}

      {/* {customerDetails.vip == true ? (
        <div>
          <p>customer Id: {customerDetails.id} </p>
          <p> customer Email: {customerDetails.email} </p>
          <p>customer Phone: {customerDetails.phoneNumber}</p>
        </div>
      ) : (
        <div>
          {Object.entries(customerDetails).map((elm) => (
            <p>
              {elm[0].charAt(0).toUpperCase() + elm[0].slice(1)}:{" "}
              {String(elm[1])}
            </p>
          ))}
        </div>
      )} */}
      <p>customer Id: {customerDetails.id} </p>
      <p> customer Email: {customerDetails.email} </p>
      <p>customer Phone: {customerDetails.phoneNumber}</p>
      <p>
        Customer Base: {Object.values(customerDetails)[5] ? "VIP" : "Standard"}
      </p>
    </div>
  );
}
