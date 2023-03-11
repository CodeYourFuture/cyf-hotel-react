import React, { useEffect, useState } from "react";

const CustomerProfile = (props) => {
  // console.log(props)

  const[customer, setCustomer] = useState("");

  let id = props.id;
  //   let myObject = {};
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then((response) => response.json())
      .then((data) => 
      setCustomer(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <p>Id: {customer.id}</p>
      <p>First name: {customer.firstName}</p>
      <p>Surname: {customer.surname}</p>
    </div>
  );

  //   if (props.id) {
  //     // console.log(myObject);
  //     return (
  //       <div>
  //         <p>something</p>
  //       </div>
  //     );
  //   } else {
  //     return <></>;
  //   }
};

export default CustomerProfile;

// 21. Display a customer profile - step 2
// Instructions: When a "Show profile" button is clicked in the table, fetch the corresponding customer profile from
// https://cyf-react.glitch.me/customers/<ID> in the <CustomerProfile /> component. A customer profile should show the customer
// ID, their email, if they are VIP and their phone number in a list.

// Hint: You need to use useEffect and the correct dependency array. You'll need to fetch customers data from the API every time a
// "Show profile" button is clicked and render it accordingly.

// Test: When you click on a "Show profile" button in the table, the corresponding customer profile is loaded and rendered on the screen.
