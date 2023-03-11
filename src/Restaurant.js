import React from "react";
// import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = () => {
  // the following is a new line added on 09 March 2023
  // const [orders, setOrders] = useState(0);
  return (
    <div className="App-content">
      <div className="container">
        <h3>Restaurant Orders</h3>
        <ul>
          <Order orderType="Pizzas" />
          <Order orderType="Salads" />
          <Order orderType="Chocolate cake" />
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
