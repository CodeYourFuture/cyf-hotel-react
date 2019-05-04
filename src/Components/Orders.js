import React from 'react';
import RestaurantButton from './RestaurantButton';

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = { orders: 0 }
    }
    addOrder = () => {
        console.log("Add order");
        this.setState(previousState => {
            return { orders: previousState.orders + 1 }
        })
    }
    cancelOrder = () => {
        if (this.state.orders > 0) {
            this.setState(previousState => {
                return { orders: previousState.orders - 1 }
            })
        }
    }
    render() {
        return (
            <li>
                {this.props.orderType} : {this.state.orders} <RestaurantButton btnLabel={["Add", "Cancel"]} addOrderAndCancel={[this.addOrder, this.cancelOrder]} />
            </li>
        );
    }
}

export default Orders;