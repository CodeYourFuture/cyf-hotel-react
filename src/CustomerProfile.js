import React, { useState, useEffect } from "react";

function CustomerProfile({ id, email, phoneNumber, data }) {
  // console.log("Hye my number i customerProfile is" + phoneNumber)
  //we are using state variable to store the fetched data then use it later.
  // eslint-disable-next-line
  const [customer, setCustomer] = useState(data);
  // console.log(customer)

  //here we will be using useEffect to fetch the data for relevant ID.
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        // console.log("Yes fetch is working" +data)
        setCustomer(data);
      });

    // eslint-disable-next-line
  }, []);

  if (id > 0)
    return (
      <div className="customer-profile">
        Customer {id} profile, email= {email}, number={phoneNumber}{" "}
      </div>
    );
  else return <div />;
}

export default CustomerProfile;
