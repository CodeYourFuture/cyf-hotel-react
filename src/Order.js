import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Orders({ orderType, orderType1, orderType2 }) {
  const [orders, setOrders] = useState(0);
  const [orders1, setOrders1] = useState(0);
  const [orders2, setOrders2] = useState(0);
  function orderOne() {
    setOrders(orders + 1)
  }
  function orderOne1() {
    setOrders1(orders1 + 1)
  }

  function orderOne2() {
    setOrders2(orders2 + 1)
  }
  return (
    <div>
      <ul>
        <li>
          {orderType}: {orders} <RestaurantButton orderOne={orderOne} />

          {orderType[1]}: {orders1} <RestaurantButton orderOne={orderOne1} />

          {orderType[2]}: {orders2} <RestaurantButton orderOne={orderOne2} />
        </li>
      </ul>
    </div>
  )
}

export default Orders;