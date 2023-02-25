import React, { useState } from "react";

const Restaurant = () => {
 const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

   return (
    <div>
      <h4>Restaurant Orders</h4>
      <ul>
        <li>
          Pizzas: {orders}{" "}
          <button className="btn btn-primary" onClick={orderOne}>
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};


export default Restaurant;
