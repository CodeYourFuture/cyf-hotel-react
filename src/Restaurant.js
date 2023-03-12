import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    // <table className="App-content">
    //   <tbody>
    //     <th>Restaurant Orders</th>
    //     <Order orderType="Pizzas" />
    //     <Order orderType="Salads" />
    //     <Order orderType="Chocolate cake" />
    //   </tbody>
    // </table>

    <div className="App-content">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
