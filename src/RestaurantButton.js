import React from "react";

const styleButton = { padding: "5px", margin: "6px", background: "green" };

const RestaurantButton = (props)=>{
 return (
   <>
      <button style={styleButton} className="btn btn-primary" onClick={props.handleClick}>
       Add+</button>
   </>
 );
}

export default RestaurantButton;