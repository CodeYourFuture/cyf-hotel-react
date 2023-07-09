import React from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  
  
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <RestaurantButton onClick = {()=> {props.orders}} />
    </div>
  );
};

export default Restaurant;
