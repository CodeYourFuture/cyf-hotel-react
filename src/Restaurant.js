import Order from "./Order";
import React from "react";

const Restaurant = () => {
  return (
    <div>
      <h2>Restaurant Orders</h2>
      <ul style={{ listStyleType: "none" }}>
        <table>
          <tr>
            <td style={{ border: "2px solid #778899" }}>
              {" "}
              <Order orderType="Pizzas" />
            </td>
          </tr>
          <tr>
            <td style={{ border: "2px solid #778899" }}>
              <Order orderType="Salads" />
            </td>
          </tr>
          <tr>
            <td style={{ border: "2px solid #778899" }}>
              <Order orderType="Chocolate cake" />
            </td>
          </tr>
        </table>
      </ul>
    </div>
  );
};

export default Restaurant;
