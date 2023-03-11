import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = (props) => {
  const [orders, setOrders] = useState(0);
  
  const orderOne = () => {
    setOrders(orders + 1);

  };
  
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        

        <ul>
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salad"} />
        <Order orderType={"Chocolate cake"} />
        </ul>
        
      </ul>
    </div>
  );
};

export default Restaurant;
