import React, { useEffect } from "react";

const CustomerProfile = props => {
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(err => console.log(err));
  }, [props.id]);

  return (
    <div>
      <p>Customer {props.id} Profile </p>
    </div>
  );
};

export default CustomerProfile;
