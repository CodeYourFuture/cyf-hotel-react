import React, { useEffect, useState } from "react";

const CustomerProfile = ({ id }) => {
const [customerData, setCustomerData] =useState(null);

useEffect(()=> {
    fetch('https://cyf-react.glitch.me/customers/${<ID>}')
    .then((response)=>response.json())
    .then((data)=>setCustomerData(data))
    .catch((error) => console.log(error));
}, [id]);

if(!customerData) {
    return <div>Loading customer profile...</div>
}

    return (
    <div>
<h2>customer {id} Profile</h2>
<ul>
    <li>customer Id: {customerData.id}</li>
    <li>Email: {customerData.email}</li>
    <li>VIP: {customerData.vip ? "yes" : "No"}</li>
    <li>Phone Number: {customerData.phoneNumber}</li>
</ul>
    </div>

)
};
export default CustomerProfile;