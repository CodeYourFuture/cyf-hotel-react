

import React, {useState} from "react";
import RestaurantButton from "./RestaurantButton";



const Order = ({orderType}) => {
  // const pizzas = 0;
  const [orders, setOrders] = useState(0)
  const orderOne = () => {
    setOrders(orders+1)
  }
  return (
   <li>

          {/* Pizzas: {orders} <button onClick= {orderOne} className="btn btn-primary">Add</button> */}
        {orderType} {orders}<RestaurantButton onClick= {orderOne}/>
     </li>  
  );
};

export default Order;