import React from 'react';


const CustomerProfile= (props) => {
  

return (
  <div>
    <ul className='customer'>
      {props.id && <li>Customer_ID : {props.id}</li>}
      {props.firstName && <li>Name : {props.firstName}</li>}
      {props.surname && <li>surname : {props.surname}</li>}
      {props.vip && <li>email : {props.email}</li>}
      {props.phoneNumber && <li>phone number : {props.phoneNumber}</li>}
    </ul>
  </div>
);
}

export default CustomerProfile;