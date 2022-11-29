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
  console.log(customerDetails);
  return (
    <div>
      <p>Customer {props.id} Profiles </p>
      <p>
        {Object.entries(customerDetails).map(elm => (
          <li>
            {elm[0]}: {elm[1]}
          </li>
        ))}
      </p>
      >
    </div>
  );
}
