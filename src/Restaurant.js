import React from "react";

import Order from "./Components/order";
const Restaurant = () => {
  // function orderOne() {
  //   return setOrders((pizzaOrder) => pizzaOrder + 1);
  // }
  // const [orders, setOrders] = useState(0);
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
