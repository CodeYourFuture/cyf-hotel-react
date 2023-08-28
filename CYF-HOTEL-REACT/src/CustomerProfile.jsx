import React from 'react'

const CustomerProfile =(props) =>{
  // if (props.customersProfile.vip === true) 
  return (
    <div>
     <p>Customer ID: { props.customersProfile.id}</p>
     <p>Customer Email: { props.customersProfile.email}</p>
     {props.customersProfile.vip && (<p>Customer Phone Number: { props.customersProfile.phoneNumber}</p>)}
    </div>
  )
}

export default CustomerProfile;
