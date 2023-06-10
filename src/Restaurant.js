import React, { useState } from "react";

const Restaurant = () => {
  // array destructuring
  // setOrders is a function that allows me to modify the value of the orders variable
  // 0 is the initial value
  const [orders, setOrders] = useState(0);

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <button className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
