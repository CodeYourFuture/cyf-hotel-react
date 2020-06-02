import React from "react";

const Restaurant = props => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {props.orders}{" "}
          <button onClick={props.handleOrders} className="btn btn-primary">
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
