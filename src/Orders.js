import React, { Component } from 'react'
import Button from './Button'
class Orders extends Component {
  constructor (props) {
    super(props)
    this.state = {
      orders: 0
    }
  }
  addOrder = () => {
    this.setState(previousState => {
      return { orders: previousState.orders + 1 }
    })
  }
  cancelOrder = () => {
    this.setState(previousState => {
      return { orders: previousState.orders - 1 }
    })
  }
  render () {
    return (
      <ul>
        <li>
          {this.props.orderType}:{' '}
          <Button caption='-' addOrder={this.cancelOrder} /> {this.state.orders}{' '}
          <Button caption='+' addOrder={this.addOrder} />
        </li>{' '}
        <br />
      </ul>
    )
  }
}
export default Orders
