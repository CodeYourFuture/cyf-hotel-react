import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [orders, setCountOrders] = useState(0);

  function setOrders() {
    setCountOrders(order => order + 1);
  }

  function orderOne(props) {
    return setOrders();
  }

  return (
    <div className="container border-top py-5">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <RestaurantButton addPizza={() => orderOne()} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
