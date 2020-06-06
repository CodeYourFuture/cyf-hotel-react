import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <ul>
        <li>
          Pizzas: {props.orders}{" "}
          <button onClick={props.onClick} className="btn btn-primary">
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default RestaurantButton;
