import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const numberPizzas = 0;

function Order({ orderType }) {
  const [orders, setOrders] = useState(numberPizzas);

  function orderOne() {
    setOrders(orders + 1);
  }

  return (
    <>
      <li>
        {orderType}: {orders}
        <RestaurantButton setOrders={orderOne} />
      </li>
    </>
  );
}

export default Order;
