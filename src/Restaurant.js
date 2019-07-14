import React, {Component} from 'react';

class Restaurant extends Component {
  addOrder = () => {
    console.log('add order');
  };
  render() {
    const pizzas = 0;
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <li>
            Pizzas: {pizzas}{' '}
            <button className="btn btn-primary" onClick={this.addOrder}>
              Add
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Restaurant;
