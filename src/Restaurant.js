import React, { useState } from "react";

const Restaurant = () => {
  const [order, setOder] = useState(0);
  
  const AddPizzas = () => {
    setOder(order + 1)
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {order} <button onClick={AddPizzas} className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
