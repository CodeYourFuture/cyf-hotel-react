import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";

export default class Order extends Component {
   constructor(props) {
      super(props);
      this.state = {
         orders: 0
      };
   }
   addOrder = () => {
      console.log("Add order");

      this.setState({
         orders: this.state.orders + 1
      });
   };
   render() {
      return (
         <React.Fragment>
            <li>
               {this.props.orderType} {this.state.orders}{" "}
            </li>
            <RestaurantButton addOrder={this.addOrder} />
         </React.Fragment>
      );
   }
}
