import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

export function Order(props) {
  const [orders, setOrders] = useState(0);

 const orderOne = (event) => {
   event.preventDefault();
   setOrders((order) => order + 1);
 };
  return (
    <div>
      <li>
        {props.orderType}: {orders}
        
        <RestaurantButton orderone={orderOne} />
      </li>
    </div>
  );
}
export default Order;