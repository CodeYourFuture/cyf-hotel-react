import React, { useState, useEffect } from "react";

const CustomerProfile = suspect => {
  // const [ suspectId,setSupectId]=useState(null)
  const [thatGuy, setThatGuy] = useState(null);
  console.log(suspect);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${suspect.suspect}`)
      .then(res => res.json())
      .then(data => setThatGuy(data));
  }, [suspect]);
  console.log(thatGuy);
  if (thatGuy != null) {
    return (
      <div>
        <span>
          <strong className="col-12">Customer profile</strong>
        </span>
        <span>
          Customer id:
          <strong>
            <div>{JSON.stringify(thatGuy)}</div>
          </strong>
        </span>
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
};

export default CustomerProfile;
