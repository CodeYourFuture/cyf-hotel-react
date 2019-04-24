import React, { Component } from 'react'
import RestaurantButton from "./RestaurantButton"

export class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: 0
        }
    }

    addOrder = () => { this.setState({ orders: this.state.orders + 1 }) };
    render() {
        return (
            <div className="orderType">
                <li>
                    {this.props.orderType}: {this.state.orders} <RestaurantButton order={this.addOrder} />
                </li>
            </div>
        )
    }
}

export default Orders
