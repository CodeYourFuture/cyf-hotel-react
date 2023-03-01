import React, {useState} from "react";

const Restaurant = () => {

    const [orders, setCount] = useState(0);
    const orderOne = () => {
      setCount(orders+1);
    }

  return (
    <div className="restaurantOrders">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <button onClick = {orderOne} className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
