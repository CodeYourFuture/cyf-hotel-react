import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  // const pizzas = 0;
  let [orders, setOrders] = useState(0); // state meaning react varibale setOrder is callback funtion
  function incrementOrder() {
    setOrders(orders + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}
          {/* {`Pizzas: ${orders}`} */}
          <RestaurantButton ordering={incrementOrder} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
