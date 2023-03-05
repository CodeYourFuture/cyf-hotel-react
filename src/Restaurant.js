import React, { useState } from "react";
//import Order from "./Order";
import RestaurantButton from "./ResturantButton";
const Restaurant = () => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
    console.log("hi")
  };
  const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas:{orders}
          <RestaurantButton order = {orderOne}/>
        </li>
        {/* <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocoloate Cake" /> */}
      </ul>
    </div>
  );
};

export default Restaurant;
