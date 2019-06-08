import React, { Component } from "react";

class Restaurant extends Component {
  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <Order name={"Pizza"} />
          <Order name={"Salad"} />
        </ul>
      </div>
    );
  }
}
const RestaurantButton = props => (
  <button className="btn btn-primary" onClick={props.handleClick}>
    Add Order
  </button>
);
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: 0
    };
  }
  addOrder = () => {
    this.setState(function(currentState) {
      return {
        orders: currentState.orders + 1
      };
    });
  };
  render() {
    return (
      <li>
        {this.props.name}:{this.state.orders} <br />
        <RestaurantButton handleClick={this.addOrder} />
      </li>
    );
  }
}
export default Restaurant;
