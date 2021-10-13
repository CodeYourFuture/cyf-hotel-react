import React, { useState } from "react";
//import Orders from "./RestaurantButton";
import RestaurantButton from "./RestaurantButton";
const Orders = props => {
  // const pizzas = 0;
  const [orders, setOrders] = useState(0);
  console.log(orders);
  //function restaurant(){
  function orderOne() {
    setOrders(orders => {
      return orders + 1;
    });
    console.log(orders);
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <li>
          {props.orderType}: {orders}
          <RestaurantButton adding={orderOne} />
        </li>
      </div>
    );
  }
};
export default Orders;
