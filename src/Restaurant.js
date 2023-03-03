import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  //const pizzas = 0;
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}
          {/* <button className="btn btn-primary" onClick={orderOne}>
            Add
          </button> */}
          <RestaurantButton orderOne={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
