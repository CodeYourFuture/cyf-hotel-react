import React, { useState } from "react";
import RestaurantButton from "./Button";

//  task -12
function Order(props) {
  // task -09
  const [Orders, setOrders] = useState(0);

  // task-10
  function orderOne() {
    setOrders(count => count + 1);
  }

  return (
    <div>
      <li>
        {props.orderType}: {Orders}
        {/* task - 11 */}
        <RestaurantButton handleClick={orderOne} />
      </li>
    </div>
  );
}

export default Order;
