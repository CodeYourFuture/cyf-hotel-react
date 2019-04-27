import React, {Component} from "react";

function RestaurantButton (props) {
    return (
      <div>
            <button className="btn btn-primary" onClick={props.order} >Add</button>
      </div>
    )
}

export default RestaurantButton;
