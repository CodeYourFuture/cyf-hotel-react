import React, { useState, useEffect } from "react";

const CustomerProfile = ({ suspectId }) => {
  const [supectId2, setSuspectId2] = useState(null);
  const [thatGuy, setThatGuy] = useState(null);
  setSuspectId2({ suspectId });

  useEffect(
    props => {
      fetch(`https://cyf-react.glitch.me/customers/${props.suspect}`)
        .then(res => res.json())
        .then(data => setThatGuy(data));
    },
    [{ suspectId }]
  );
  console.log({ thatGuy });
  return <div>thatGuy</div>;
};

export default CustomerProfile;
