import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order(props) {
  const [orders, setOrders] = useState(50);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  const orderTwo = () => {
    setOrders(orders - 1);
  };

  return (
    <div>
      <li>
        {props.orderType}
        {orders}
        {/* Pizzas: {order} */}
        <RestaurantButton orderOne={orderOne} orderTwo={orderTwo} />
      </li>
    </div>
  );
}

export default Order;
