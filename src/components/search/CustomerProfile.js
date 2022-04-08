import React, { useEffect } from "react";

function CustomerProfile({ id }) {
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, [id]);

  return <>Customer {id} Profile</>;
}

export default CustomerProfile;
