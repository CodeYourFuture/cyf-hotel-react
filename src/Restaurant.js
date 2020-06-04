import React, { useState } from "react"; // imported the useState react hook.

const Restaurant = () => {
  const [orders, setOrders] = useState(0); // declared orders variable and passed setOrder function to it.
  //const pizzas= 0; commented Pizzas variables

  const orderOne = () => {
    // added the orderOne function that calls set orders function
    setOrders(orders + 1); //setOrder function gets the order as a parameter and increases with +1;
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}
          {/* replaced pizzas variable with orders*/}{" "}
          <button
            className="btn btn-primary"
            onClick={
              orderOne
            } /*will call on order function to increase the order by 1*/
          >
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
