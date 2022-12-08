import React from "react";
import Order from "./components/Order";
// import { useState } from "react";

const Restaurant = () => {
  // const [order, setOrders] = useState(0);
  // const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

// function Restaurant(props){
//   return()
// }

export default Restaurant;
