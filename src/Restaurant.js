import React, { useState } from "react";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(() => {
      return orders + 1;
    });
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>Pizzas: {orders} </li>
        <Restaurant handleClick={orderOne}/>
      </ul>
    </div>
  );
};

export default Restaurant;
