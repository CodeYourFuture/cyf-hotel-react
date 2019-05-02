
import React, { Component } from 'react';

import Orders from './Orders'



class Restaurant extends Component {

  render() {

    const pizzas = 0;

    return (

      <div>

        <h3>Restaurant Orders</h3>

        <ul>

          <Orders orderType="Pizzas" />

          <Orders orderType="Salads" />

        </ul>

      </div>

    );

  }

}



export default Restaurant;




