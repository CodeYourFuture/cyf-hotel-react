import React, {Component} from "react";
 import Orders from "./Orders";


class Restaurant extends Component {
  
  render () {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <Orders portion={0} orderType="Pizzas"/>
          <Orders portion={0} orderType="Salads" />
        </ul>
      </div>
    )
  }
}

export default Restaurant;
