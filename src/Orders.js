import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: 0
    };
  }
  addOrder = () => {
    this.setState(previousState => {
      return {
        orders: previousState.orders + 1
      };
    });
    console.log("This button add an order");
  };

  render() {
    // console.log(this.state.orders);
    return (
      <div>
        <ul>
          {/* by calling the add order we pass it as props and 
            its passed to the restaurantbutton component */}
          <li>
            {this.props.orderType}: {this.state.orders}
          </li>
        </ul>

        <RestaurantButton onClick={this.addOrder} />
      </div>
    );
  }
}

export default Orders;
