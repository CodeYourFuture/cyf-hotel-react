import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
// import RestaurantRemoveButton from "./RestaurantRemoveButton.js";

function Order(props) {
  const [orders, setOrders] = useState(0);
  const orderOne = () => setOrders(orders + 1);

  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton handleClick={orderOne} />
      {/* <RestaurantRemoveButton /> */} <hr width="20%" />
    </li>
  );
}

export default Order;
