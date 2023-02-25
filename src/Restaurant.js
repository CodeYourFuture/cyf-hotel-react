import React, { useState } from "react";

const Restaurant = () => {
 const [orders, setOrders] = useState(0);
  return (
    <div>
      <h4>Restaurant Orders</h4>
      <ul>
        <li>
          Pizzas: {orders} <button className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};


export default Restaurant;
