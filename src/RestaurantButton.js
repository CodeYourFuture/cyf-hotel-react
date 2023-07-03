import React from "react";


//Instructions: Extract the <button> currently in the <Restaurant /> component to a new component
// named RestaurantButton. Pass the orderOne function as a prop to the <RestaurantButton /> component 
//and use this prop in the onClick handler.

const RestaurantButton = ({onClick}) => {
    return (
        <button onClick= {onClick} className="btn btn-primary">Add</button>
        )
}







export default RestaurantButton;




