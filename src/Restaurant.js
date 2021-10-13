import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Restaurant = () => {
  // const pizzas = 0;
  const [orders, setOrders] = useState(0);
  console.log(orders);
  //function restaurant(){
  function orderOne() {
    setOrders(orders => {
      return orders + 1;
    });
    console.log(orders);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}
          <RestaurantButton adding={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
