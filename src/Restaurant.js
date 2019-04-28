import React, {Component} from "react";
import Orders from "./Orders";

class Restaurant extends Component {
  addOrder = () => {
  console.log("Add Order");
  };
	  render() {
    return (
      <div className="restaurant-orders">
        <h3>Restaurant Orders</h3>
        <ul>
          <Orders orderType="Pizza" />
          <Orders orderType="Salads" />
        </ul>
      </div>
    );
  }
		

}

export default Restaurant;


