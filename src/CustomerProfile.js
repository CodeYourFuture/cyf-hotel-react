import React, { useEffect, useState } from "react";

/*component that change handler displays the customer id*/
const CustomerProfile = props => {
  //customer profile
  const [data, setData] = useState([]); //state that stores the fetch data
  useEffect(() => {
    // use effect  for fetch
    fetch(`https://cyf-react.illicitonion.com/customers/${props.id}`) // fetch link
      .then(Response => Response.json()) // converts response to json
      .then(data => setData(data)); // passes the the date to set data function  so that data function access it
  }, [props.id]); // correct dependency array.

  return (
    <div>
      Customer Profile:
      <ul>
        <li>{data.firstName}</li>
        <li>{data.surname}</li>
        <li>{data.id}</li>
        <li>{data.email}</li>
      </ul>
    </div>
  ); // gets the id from the props.
};

export default CustomerProfile;
