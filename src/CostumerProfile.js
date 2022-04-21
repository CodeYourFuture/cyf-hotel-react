import React, { useEffect, useState } from "react";

const CostumerProfile = props => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [props.id]); //we want this one to be fired whenever props.id changes
  return (
    <>
      <h3>Costumer {props.id} Profile</h3>
      <ul style={{ listStyle: "none" }}>
        <h4>
          {data.firstName} {data.surname}
        </h4>
        <li />
        <li>{data.email}</li>
        <li>{data.vip ? data.phoneNumber : null}</li>
      </ul>
    </>
  );
};

export default CostumerProfile;
