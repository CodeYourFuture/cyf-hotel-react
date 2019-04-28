import React from "react";
import RestaurantButton from "./RestaurantButton";

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: 0
    };
  }

  addOrder = () => {
    console.log("add order");
    //this.setState({orders: this.state.orders +1})
    this.setState(state => {
      return { orders: state.orders + 1 };
    });
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            {this.props.orderType}: {this.state.orders}
          </li>
          {/* //whatever the value is of orders then render it next to pizza.  */}
        </ul>
        <RestaurantButton addOrder={this.addOrder} />
      </div>
    );
  }
}

export default Orders;

//if u have a state then add a class.
//everyting has to be in one rreturned as a single element in render.
