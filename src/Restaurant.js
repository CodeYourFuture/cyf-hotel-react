import React, { useState } from "react";
import Order from "./Components/Order"

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType = 'pasta'/>
        <Order orderType = 'Chocolate cake' />
        <Order orderType = 'salads' />
        
      </ul>
    </div>
  );
  };

export default Restaurant;
