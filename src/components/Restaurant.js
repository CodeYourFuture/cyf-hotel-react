import React from "react";
import Button from "./Buttons";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orders: 0 };
  }

  addOrder = () => {
    this.setState(currentOrdersNumber => {
      return { orders: currentOrdersNumber.orders + 1 };
    });
  };
  render() {
    return (
      <ul>
        <li className="orders-list">
          {this.props.orderType} : {this.state.orders} {"   "}
          <Button name="Add" onClick={this.addOrder} />
        </li>
      </ul>
    );
  }
}
class Restaurant extends React.Component {
  render() {
    return (
      <div>
        <h3 className="resturant-adress">Restaurant Orders</h3>
        <Order orderType="pizza" />
        <Order orderType="Salad" />
        <Order orderType="cola" />
      </div>
    );
  }
}

export { Restaurant };
