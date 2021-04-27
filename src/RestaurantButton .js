import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={props.orderOne}
        style={{ margin: "10px" }}
      >
        <span style={{ fontSize: "25px", fontWeight: "bolder" }}>+</span>
      </button>
      <button
        className="btn btn-primary"
        onClick={props.removeOne}
        style={{ margin: "10px" }}
      >
        <span style={{ fontSize: "25px", fontWeight: "bolder" }}>‒</span>
      </button>
    </div>
  );
};

export default RestaurantButton;
