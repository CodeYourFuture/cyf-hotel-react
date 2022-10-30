import React, { useState } from "react";

const Restaurant = () => {
  const [countPizza, setCountPizza] = useState(0);

  function orderOne() {
    setCountPizza(countPizza + 1);
  }

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {countPizza}{" "}
          <button className="btn btn-primary" onClick={orderOne}>
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
