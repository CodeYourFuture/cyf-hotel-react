import React, { useState } from "react";

// import RestaurantButton from "./myComponents/RestaurantButton";
import Order from "./myComponents/Order";

const Restaurant = () => {
  // const pizzas = 0;
  // const [orders, setOrders] = useState(0);
  // function orderOne() {
  //   setOrders(s => s + 1);
  // }

  return (
    <div style={{ height: "300px" }}>
      <div>
        <h3>Restaurant Orders</h3>
        <ul style={{ display: "flex" }}>
          <Order orderType="Pizzas" />
          <Order orderType="Salads" />
          <Order orderType="Chocolate" />
          {/* <li style={{ height: "300px" }}> */}
          {/* Pizzas: {orders} */}
          {/* <RestaurantButton orderOneProp={orderOne} /> */}
          {/* <button className="btn btn-primary" onClick={() => orderOneProp}>
            Add
          </button> */}
          {/* </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
