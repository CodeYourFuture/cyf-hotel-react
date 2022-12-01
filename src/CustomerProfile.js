import React, { useEffect, useState } from "react";
import FakeBookings from "./data/fakeBookings.json";

const CustomerProfile = props => {
  const [customerProfileDetails, setCustomerProfileDetails] = useState({});

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => response.json())
      .then(customerProfileDetails =>
        setCustomerProfileDetails(customerProfileDetails)
      );
  }, [props.id]); //we want this one to be fired whenever props.id changes

  if (props.id == 0) {
    return null;
  }

  return (
    <>
      <h3>Customer {props.id} Profile</h3>
      <ul style={{ listStyle: "none" }}>
        <h4>
          {customerProfileDetails.firstName} {customerProfileDetails.surname}
        </h4>
        <li />
        <li>{customerProfileDetails.email}</li>
        <li>
          {customerProfileDetails.vip
            ? customerProfileDetails.phoneNumber
            : null}
        </li>
      </ul>
    </>
  );
};
//     let profileDet = {};

//     //Do not show anything
//     if (props.id === 0)
//     {
//         return null;
//     }
//     else
//     {
//         let profileDet = FakeBookings.filter((item) => {
//             return (item.id === props.id)
//         });
//         console.log(profileDet);

//       };

//     return (
//       <div>
//      <p>Customer Profile {profileDet.id}</p>
//       </div>
//     )
// };

export default CustomerProfile;
