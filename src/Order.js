import React, {useState} from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
    const [orders, setCount] = useState(0);
    const orderOne = () => {
      setCount(orders+1);
    }
    return (
        <li>
             Pizzas: {orders} <RestaurantButton orderOne = {orderOne}/>
         </li>
    )
}

export default Order