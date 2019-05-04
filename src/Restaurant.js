import React, { Component } from 'react'
import Orders from './Orders'
class Restaurant extends Component {
  render () {
    return (
      <div className='container'>
        <h3>Restaurant Orders</h3>
        <Orders orderType='Pizza' />
        <Orders orderType='Salad' />
      </div>
    )
  }
}
export default Restaurant
