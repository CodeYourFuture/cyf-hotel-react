import React from "react";
import Order from "./components/Order";

class Restaurant extends React.Component {
  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <section className="orders">
          <div>
            <Order orderType={"Pizzas"} />
          </div>
          <div>
            <Order orderType={"Salads"} />
          </div>
        </section>
      </div>
    );
  }
}
export default Restaurant;
