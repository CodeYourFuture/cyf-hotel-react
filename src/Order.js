import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [order, setOrder] = useState(0);

  function addOrder() {
    setOrder(order + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          {props.orderType}: {order}{" "}
          <RestaurantButton handlerClick={addOrder} />
        </li>
      </ul>
    </div>
  );
};

export default Order;
