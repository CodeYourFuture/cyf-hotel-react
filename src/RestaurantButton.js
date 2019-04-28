import React from "react";


class RestaurantButton extends React.Component {
   
    render (){
        return (
             <button onClick = {this.props.addOrder}>Add</button>
        )
    }

}

export default RestaurantButton;

//props is something that has a component passed to it. moves data between component.
//props here is allowing the addOrder function from resturant to be used in the resturant button component. 
