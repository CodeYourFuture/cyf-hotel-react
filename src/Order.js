import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

  const Order = (props) =>{
    const [orders, setOrders] = useState(0);

    const orderOne = () => {
      setOrders((orders) => {
        return ++orders;
      })};
      
   return(
    <li>
      {props.orderType}: {orders} <RestaurantButton pizza={orderOne} />
    </li>
   )
   };

export default Order;