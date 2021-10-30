//import React from "react";

import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Orders(props) {
  const [order, setOrder] = useState(0);
  function orderOne() {
    setOrder(order + 1);
  }
  return (
    <li>
      {props.orderType}: {order}
      {""} <RestaurantButton orderOne={orderOne} />
    </li>
  );
}
export default Orders;
