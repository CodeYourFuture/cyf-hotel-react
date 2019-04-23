import React, {Component} from "react";
import RestaurantButton from "./RestaurantButton";
class Orders extends Component{

    addOrder = () => {
    this.setState(previousState => {
        return {
         orders: previousState.orders + 1
    }
    })
    }
    constructor(props) {
        super(props);
        this.state = {
            orders: 0
        }
    }
    render() {
       
        return (
            <div>
                <h3>Restaurant{this.state.orders} </h3>
                
                 <li>
                   {this.props.orderType}: {this.state.orders}
                 </li>
                 <RestaurantButton handleClick={this.addOrder} />

            </div >
        );


    };

}


export default Orders;