import { useEffect, useState } from "react";

const CustomerProfile = (props) => {
  const [customerDetails,setCustomerDetails]=useState([]);
useEffect(()=>{
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
    .then(res=>res.json())
    .then(data=>  setCustomerDetails(data))
    console.log(customerDetails)
    
},[props.id]);

    return (
      <div>
        <h2>customer Details : Id = {customerDetails.id} is a {customerDetails.title}</h2>
        <span>Name : {customerDetails.firstName} </span><span>last Name: {customerDetails.surname}</span>
        <br></br>
        <span>Email : {customerDetails.email}</span>
        <br />
        <span>{customerDetails.phoneNumber}</span>
        <p>{customerDetails.vip ? "customer has a Vip place":"customer has an Ordinary place"}</p>
      </div>
    );
};

export default CustomerProfile;
