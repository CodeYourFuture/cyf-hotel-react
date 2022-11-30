import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  const [customerDetails, setCustomerDetails] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setCustomerDetails(data);
        console.log(data);
      });
  }, [props.id]);
  return (
    <div>
      {customerDetails ? (
        <div>
          <p>Customer {props.id} Profiles </p>

          <h2>Customer id :{customerDetails.id}</h2>
          <p>Email:{customerDetails.email}</p>
          <p>Phone Number: {customerDetails.phoneNumber}</p>
        </div>
      ) : null}
    </div>
  );
}
export default CustomerProfile;

// import React, { useState, useEffect } from "react";

// function CustomerProfile() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);
//   useEffect(() => {
//     fetch(`https://cyf-react.glitch.me/customer/${id}`)
//       .then(res => res.json())
//       .then(data => {
//         setIsLoaded(data);
//         console.log(data);
//       })
//       .then(
//         result => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         error => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   }, [id]);
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <div>
//         <h2>Customer id :{items.id}</h2>
//         <p>Email:{items.email}</p>
//         <p>Vip Status:</p>
//         <p>Phone Number:</p>
//       </div>
//     );
//   }
// }

// export default CustomerProfile;
