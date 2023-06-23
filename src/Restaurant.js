import React from "react";
import "./Restaurant.css";
import Order from "./components/Order";

const Restaurant = () => {
  
  return (
    <div className="restaurant-orders">
      <h3>Restaurant Orders</h3>
      <ul>
       <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
