import React from "react";
const RestaurantButton = ({OrderOne}) => {
    //console.log(prop);
    return (
<button className="btn btn-primary" onClick={OrderOne}>Add</button>
    );
}

export default RestaurantButton;