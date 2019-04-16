import React, { Component } from "react";

import Orders from "./components/Orders/Orders";

class Restaurant extends Component {
  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <Orders orderType="Pizza" />
          <Orders orderType="Salads" />
        </ul>
      </div>
    );
  }
}
export default Restaurant;
