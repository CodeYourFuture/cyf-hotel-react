import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
    const [orders, setOrders] = useState(0);
    
    const orderOne = () => {
      setOrders(orders + 1);
    };

    return(
        <li>
        Pizzas: {orders} <RestaurantButton onClick={orderOne}/>
      </li>
    )
}

export default Order;