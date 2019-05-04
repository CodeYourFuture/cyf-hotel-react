import React from "react";
import Orders from './Orders';
class Restaurant extends React.Component {

  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <Orders orderType="Pizzas" />
          <br />
          <Orders orderType="Salads" />
        </ul>
      </div >
    );
  }
};

export default Restaurant;