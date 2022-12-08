import React from "react";
import { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  function incressOrder() {
    setOrders(orders + 1);
  }

  return (
    <div id="restautant">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}
          <RestaurantButton handleClick={incressOrder} />
          {/* <button className="btn btn-primary" onClick={incressOrder}>
            Add
          </button> */}
        </li>
      </ul>
    </div>
  );
};
export default Restaurant;
