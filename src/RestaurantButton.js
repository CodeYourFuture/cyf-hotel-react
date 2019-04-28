import React from "react";

const RestaurantButton = props => {
  return (
    <button className="btn btn-primary" onClick={props.order}>
      Add
    </button>
  );
};

export default RestaurantButton;

/*import React, {Component} from "react";

class RestaurantButton extends Component{
render(){
    return(     
<button onClick={this.props.addOrder} />
//>addOrder>  
    )
}
}
export default RestaurantButton;*/
