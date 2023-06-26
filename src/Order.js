import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton.jsx";

function Order(props) {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders => preOrder + 1);
  }
  return (
    
      <li className="list-group-item">
        {props.orderType}: {" "}
        <span className="badge badge-primary badge-pill">{orders}</span>{" "}
        <RestaurantButton orderOne={orderOne} />
      </li>
  
  );
}

export default Order;