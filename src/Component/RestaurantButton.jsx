import react from "react";




const RestaurantButton = props =>{
    return (
        <>
        <button onClick={props.handlePizzaCount} className="btn btn-primary">Add</button>

        </>
    )
}

export default RestaurantButton;