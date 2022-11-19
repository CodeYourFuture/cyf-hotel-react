import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  const pizzas = 0;
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          <RestaurantButton order={orderOne} />
          Pizzas: {orders}{" "}
          {/* <button onClick={orderOne} className="btn btn-primary">
            Add
          </button> */}
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
