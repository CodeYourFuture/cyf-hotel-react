import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";
import Orders from "./Orders";

class Restaurant extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Orders orderType="Salad" />
          </li>
          <li>
            <Orders orderType="Pizza" />
          </li>
        </ul>
      </div>
    );
  }
}
export { Restaurant };
