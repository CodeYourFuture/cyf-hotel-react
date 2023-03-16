import React, { useState, useEffect } from "react";

const CustomerProfile = ({id}) =>{
    const [profile, setProfile] = useState({})
    useEffect(() => {
     fetch(`https://cyf-react.glitch.me/customers/${id}`)
       .then((res) => res.json())
       .then((data) => {
         setProfile(data);
       });
   }, [id]);
    return(
        id &&(
        <div>
    
            <p>Customer Id: {profile.id}</p>
            <p>Customer Email: {profile.email}</p>
            <p>VIP: {profile.vip ? "yes" : "no"}</p>
            <p>Customer Phone Number: {profile.phoneNumber}</p>
        
        </div>
        ) 
      
    )
   
}

export default CustomerProfile