import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="App-content">
      <div className="container">
        <h3>Restaurant Orders :</h3>
        <table>
          <thead>
            <tr>
              <th>
                <Order orderType={"Pizzas"} />
              </th>
              <th>
                <Order orderType={"Salads"} />
              </th>
              <th>
                <Order orderType={"Chocolate cake"} />
              </th>
              <th>
                <Order orderType={"Hot Drink"} />
              </th>
              <th>
                <Order orderType={"Cold Drink"} />
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Restaurant;
