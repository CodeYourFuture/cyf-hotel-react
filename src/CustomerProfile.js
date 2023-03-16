import React, { useState , useEffect } from "react";

function CustomerProfile(props){
    const [id, setId] = useState(0)
    const [emailAddress, setEmailAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [vip, setVip] = useState(false)

   

    useEffect(()=>{
 fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
   .then((res) => res.json())
   .then((data) => {
      setId(data.id);
      setEmailAddress(data.email);
      setPhoneNumber(data.phoneNumber);
      setVip(data.vip);
   });
    }, [false])
   

    return (
      <>
        <div>Customer profile:{id}</div>
        <div>Customer Email address:{emailAddress}</div>
        <div>Customer phone number: {phoneNumber}</div>
        <div>Customer VIP:{vip?"Yes":"No"}</div>
      </>
    );
   }









export default CustomerProfile;