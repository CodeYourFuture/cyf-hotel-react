import React from "react";

///home/cyf/Desktop/react/cyf-hotel-react/src/RestaurantButton.js
const RestaurantButton = props => {
  return (
    //<button className="btn btn-primary" id="btnAdd" onClick={orderOne}>Add</button>
    <button className="btn btn-primary" id="btnAdd" onClick={props.order}>
      Add
    </button>
    // {console.log(props.msg)}
  );
};

export default RestaurantButton;
