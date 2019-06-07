import React from "react";

// const Restaurant = () => {
//   const pizzas = 0;
//   return (
//     <div>
//       <h3>Restaurant Orders</h3>
//       <ul>
//         <li>
//           Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
//         </li>
//       </ul>
//     </div>
//   );
// };
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
        <li>Pizzas : {this.state.orders}</li>
        <RestaurantButton clickToAddOrder={this.addOrder} />
      </ul>
    );
  }
}
class Restaurant extends React.Component {
  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <Order />
      </div>
    );
  }
}

export { Restaurant };
