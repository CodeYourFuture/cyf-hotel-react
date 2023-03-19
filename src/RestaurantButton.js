import React from "react";
import Restaurant from "./Restaurant";
const RestaurantBtn = (props) => {
    return (<button onClick={props.func} className="btn btn-primary">Add</button>
    );
}
export default RestaurantBtn;