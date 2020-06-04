import React, { useState } from "react"; // imported the useState react hook.

const Restaurant = () => {
  const [orders, setOrders] = useState(0); // declared orders variable and passed setOrder function to it.

  //const pizzas= 0; commented Pizzas variables
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}
          {/* replaced pizzas variable with orders*/}{" "}
          <button className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
