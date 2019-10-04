import React from "react";
import RestaurantButton from "./RestaurantButton";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: 0
    };
  }

  addOrder = () => {
    console.log(`You added ${this.props.orderType} to your order ...`);
    this.setState(prevState => {
      return { orders: prevState.orders + 1 };
    });
  };

  render() {
    return (
      <li>
        {this.props.orderType}: {this.state.orders + " "}
        <RestaurantButton onClick={() => this.addOrder} />
      </li>
    );
  }
}

export default Order;
