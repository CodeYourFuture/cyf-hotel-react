import { useEffect, useState } from "react";

const CustomerProfile = (props) => {
  const [customerDetails, setCustomerDetails] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then((res) => res.json())
      .then((data) => setCustomerDetails(data));
    console.log(customerDetails);
  }, [props.id]);

  return (
    <div>
      <h3>
        customer Details : customer with Id = {customerDetails.id} , is a{" "}
        {customerDetails.title} .
      </h3>
      <span>
        <b>Name</b> : {customerDetails.firstName}{" "}
      </span>
      <span>
        <b>last Name</b>: {customerDetails.surname}
      </span>
      <p>
        <b>Email </b>: {customerDetails.email}
      </p>
      <p>
        <b>Phon Number</b> : {customerDetails.phoneNumber}
      </p>
      <p>
        {customerDetails.vip
          ? "customer has a Vip place"
          : "customer has an Ordinary place"}
      </p>
    </div>
  );
};

export default CustomerProfile;
