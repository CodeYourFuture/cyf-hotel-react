import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    return setOrders(orders + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {/* <li>
          Pizzas: {orders}{" "}
          {/* <button onClick={orderOne} className="btn btn-primary">
            Add
          </button> */}
        {/* <RestaurantButton handleClick={orderOne} />
        </li> */}
        <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
