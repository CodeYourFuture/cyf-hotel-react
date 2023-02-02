import React, { useState, useEffect } from "react";
// import React, { useState } from 'react'

export default function CustomerProfile(id) {
  const [data, setData] = useState({});
  id = id.cID;
  console.log(id);
  let custProfile;
  if (id) {
    custProfile = `Customer Profile`;
  } else {
    custProfile = `Customer ${id} Profile`;
  }

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${parseInt(id)}/`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(e => console.log("Data not found!"));
  }, [parseInt(id)]);
  // const [custProfile, setCustProfile] = useState("Customer Profile");
  // setCustProfile(`Customer ${id} Profile`);

  return (
    <div>
      <h2>{custProfile}</h2>
      {Number(id) ? <p>{`Our Customer ${id} Profile`}</p> : <p>Not found!</p>}
      <p>{`Customer ID: ${data.id}`}</p>
      <p>{`Email: ${data.email}`}</p>
    </div>
  );
}
