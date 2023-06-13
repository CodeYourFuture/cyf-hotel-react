
import React, { useState } from "react";


const Order = (props) => {
  const [orders, setOrders] = useState(0)
  const orderOne = () => {
    setOrders(orders + 1)
  }
  return (
    <li>
      {props.orderType}: {orders} <button className="btn btn-primary" onClick={orderOne}>Add</button>
    </li>
  )
}

const Restaurant = () => {

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizza" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
