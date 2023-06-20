import React, {useState} from "react";

const Restaurant = () => {
  const [orders, setOrder] = useState(0);
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}<button className="btn btn-primary" onClick={() => setOrder(orders + 1)}>Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
