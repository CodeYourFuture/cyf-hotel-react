import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
//Also, move the declaration of the `orders` state and the `orderOne` function
//from the `<Restaurant />` component to the new `<Order />` component.
// Use the `<Order />` component in the `<ul>` list of the `<Restaurant />` component.

const Order = props => {
  let [orders, setOrders] = useState(0); // state meaning react varibale setOrder is callback funtion
  function incrementOrder() {
    setOrders(orders + 1);
  }
  return (
    <div class="order">
      <li>
        {props.orderType}: {orders}
        <RestaurantButton ordering={incrementOrder} />
      </li>
    </div>
  );
};

export default Order;
