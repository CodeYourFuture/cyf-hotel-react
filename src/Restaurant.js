import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  // the following is a new line added on 09 March 2023
  const [orders, setOrders] = useState(0);
  return (
    <div className="App-content">
      <div className="container">
        <h3>Restaurant Orders</h3>
        <ul>
          <li>
            {/* Check this: https://reactjs.org/docs/hooks-state.html */}
            Pizzas: {orders} <RestaurantButton action={orderOne} />
          </li>
        </ul>
      </div>
    </div>
  );
  function orderOne() {
    setOrders(orders + 1);
    console.log("Hi");
  }
};

export default Restaurant;

// Pass the orderOne function as a prop to the <RestaurantButton /> component and use this prop in the onClick handler.
// Test: Clicking the button should still increment the number of pizzas.
