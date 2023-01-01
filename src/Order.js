import React, { useState } from "react";
import RestaurantButton from "./Button";

//  task -12
function Order(prop) {
  // task -09
  const [Orders, setOrders] = useState(0);

  // task-10
  function orderOne() {
    setOrders(count => count + 1);
  }

  return (
    <li className="order-card">
      {prop.orderType}: {Orders}
      {/* task - 11 */}
      <RestaurantButton handleClick={orderOne} add="Add" />
    </li>
  );
}

export default Order;
