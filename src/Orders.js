import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const liStyle = { color: "darkblue", background:"cornsilk",display:"block", fontSize:"extra large" };

const Orders = (props) => {
    const [orders, setOrders] = useState(0);
    function orderOne() {
      setOrders((prevOrder) => prevOrder + 1);
    }
    return (
      <>
        <li style={liStyle}>
          {props.orderType}: {orders} <RestaurantButton handleClick={orderOne} />
        </li>
      </>
    );

};

export default Orders;