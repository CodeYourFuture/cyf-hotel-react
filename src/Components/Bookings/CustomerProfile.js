import React from "react";

const CustomerProfile = props => {
  if(props.id){
  console.log("This is the id in Component:",props.id);
  return (<p>Customer {props.id} Profile</p>);
  }else{
    console.log("No data received yet");
    return(<div></div>)
  }
};

export default CustomerProfile;
