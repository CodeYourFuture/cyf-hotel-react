import React from "react"; // imported the useState react hook.

import Order from "./Order";
const Restaurant = () => {
  // declared orders variable and passed setOrder function to it.
  //const pizzas= 0; commented Pizzas variables

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
