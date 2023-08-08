import React, { useState } from "react";
import Order from "./orders"; // Import the Order component
import "./restaurant.css"
const Restaurant = () => {
  // Declare state variables for different orders
  const [pizzaCount, setPizzaCount] = useState(0);
  const [saladCount, setSaladCount] = useState(0);
  const [cakeCount, setCakeCount] = useState(0);

  return (
    <div className="restaurant-container">
      <h3>Restaurant Orders</h3>
      <ul className="order-list">
        <Order
          orderType="Pizzas"
          count={pizzaCount}
          onIncrement={() => setPizzaCount(pizzaCount + 1)}
        />
        <Order
          orderType="Salads"
          count={saladCount}
          onIncrement={() => setSaladCount(saladCount + 1)}
        />
        <Order
          orderType="Chocolate cake"
          count={cakeCount}
          onIncrement={() => setCakeCount(cakeCount + 1)}
        />
      </ul>
    </div>
  );
};

export default Restaurant;


