import React, { useState } from "react";
function RestaurantButton(props){
return (
  <div>
    <button className="btn btn-primary" onClick={props.orderFunction}>
      Add
    </button>
  </div>
);
}

export default RestaurantButton;