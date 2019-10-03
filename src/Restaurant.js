import React from "react";

class Restaurant extends React.Component {
  render() {
    const pizzas = 0;
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <li>
            Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
          </li>
        </ul>
      </div>
    );
  }
}
export default Restaurant;
