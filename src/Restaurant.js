import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="App-content">
      <div className="container">
        <h3>Restaurant Orders :</h3>
        <table>
          <tr>
            <th> Name</th>
            <th> Price </th>
            <th> Number</th>
            <th>Total</th>
            <th> Add </th>
            <th> Delete </th>
          </tr>

          <Order orderType={"Pizzas"} price={9.99} />

          <Order orderType={"Salads"} price={5.99} />

          <Order orderType={"Chocolate cake"} price={3.99} />

          <Order orderType={"Hot Drink"} price={1.99} />

          <Order orderType={"Cold Drink"} price={0.99} />
        </table>
      </div>
    </div>
  );
};

export default Restaurant;
