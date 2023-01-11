import React, { useState } from "react";
import RestaurantButton from "./Button";

//  task -12
function Order(prop) {
  // task -09
  const [Orders, setOrders] = useState(0);

  // task-10
  function add() {
    setOrders(count => count + 1);
  }

  function deduct() {
    setOrders(count => count - 1);
  }
  return (
    <li className="order-card">
      {prop.orderType}: {Orders}
      {/* task - 11 */}
      <li>
        <RestaurantButton handleClick={add} add="+" />

        <RestaurantButton handleClick={deduct} add="-" />
      </li>
    </li>
  );
}

export default Order;
