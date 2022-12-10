import React from "react";

const AddPizzaButton = props => {
  return (
    <button className="btn btn-primary" onClick={props.orderOne}>
      Add
    </button>
  );
};

export default AddPizzaButton;
