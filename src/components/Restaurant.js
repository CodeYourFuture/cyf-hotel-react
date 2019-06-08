import React from "react";

const RestaurantButton = props => {
  return (
    <button onClick={props.clickToAddOrder} className="btn btn-primary">
      Add
    </button>
  );
};
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
        <li>
          {this.props.orderType} : {this.state.orders}{" "}
          <RestaurantButton clickToAddOrder={this.addOrder} />
        </li>
      </ul>
    );
  }
}
class Restaurant extends React.Component {
  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <Order orderType="pizza" />
        <Order orderType="Salad" />
        <Order orderType="cola" />
      </div>
    );
  }
}

export { Restaurant };
