import React, { useState } from "react";

const Restaurant = () => {
  const [Orders, setOrders] = useState(0);
  return (
    <>
      <div className="resturant-container">
        <h3>Restaurant Orders</h3>
        <ul>
          <li>
            Pizzas: {Orders}{" "}
            <button
              className="btn btn-primary"
              onClick={() => setOrders(Orders + 1)}
            >
              {" "}
              add
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Restaurant;
