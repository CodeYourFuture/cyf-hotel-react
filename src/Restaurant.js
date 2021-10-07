import React, { useState } from "react";

// Renders restaurant orders, called by `App.js`.
const Restaurant = () => {
  // set state variable `pizza` to 0 then when called by the
  // add pizza button increments the count state variable by 1
  const [pizzas, setPizzasQuantity] = useState(0);
  const orderOne = () => setPizzasQuantity(pizzas + 1);

  return (
    <div className="d-flex justify-content-center orders-container">
      <div>
        <h2>Restaurant Orders</h2>
        <ul>
          <li>
            Pizzas: {pizzas}{" "}
            <button onClick={orderOne} className="btn btn-primary">
              Add
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
