import React, { useState } from "react";

const Restaurant = () => {
  const [order, setOrder] = useState(0);
  const incrementPizzaNumber = () => setOrder(order + 1);

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {order}{" "}
          <button className="btn btn-primary" onClick={incrementPizzaNumber}>
            Add More Pizza
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
