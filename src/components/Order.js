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
    /* console.log(
      "Thanks, your order of ${this.props.orderType} has been placed!"
    ); */
    this.setState({
      orders: (this.state.orders += 1)
    });
  };
  render() {
    return (
      <li className="list" style={{ listStyleType: "none" }}>
        {this.props.orderType}: {this.state.orders + " "}
        <RestaurantButton eventOnClick={this.addOrder} />
      </li>
    );
  }
}
export default Order;
