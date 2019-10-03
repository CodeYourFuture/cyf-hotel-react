import React from "react";

class Restaurant extends React.Component {
  addOrder = () => {
    console.log("Thanks, your order has been placed!");
  };
  render() {
    const pizzas = 0;
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <li>
            Pizzas: {pizzas}{" "}
            <button className="btn btn-primary" onClick={this.addOrder}>
              Add
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
export default Restaurant;
