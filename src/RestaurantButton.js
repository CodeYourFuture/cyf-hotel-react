import React from "react";
//import Restaurant from "./Restaurant"

function RestaurantButton(props){
    return(
        <div>
            <button className="btn btn-primary" onClick = {props.handleClick}>Add</button>
        </div>
    )
}

export default RestaurantButton;