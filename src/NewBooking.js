import React, { Component } from 'react'
import Button from './Button'
class BookingForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      addBooking: {}
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleBooking(this.state.addBooking)
    document.getElementById('booking-form').reset()
  }

  handleBooking = e => {
    const newBooking = Object.assign({}, this.state.addBooking)
    newBooking['id'] = this.props.id + 1
    newBooking[e.target.id] = e.target.value
    this.setState({ addBooking: newBooking })
  }

  render () {
    return (
      <div className='container lg-col-6 md-col-6 xs-col-12'>
        {' '}
        <h3> New Booking </h3>
        <form
          className='form-group'
          id='booking-form'
          onSubmit={this.handleSubmit}
        >
          <input
            className='form-control'
            id='title'
            onChange={this.handleBooking}
            placeholder='Title'
          />

          <input
            className='form-control'
            id='firstName'
            onChange={this.handleBooking}
            placeholder='FirstName'
          />

          <input
            className='form-control'
            id='surname'
            onChange={this.handleBooking}
            placeholder='Surname'
          />

          <input
            className='form-control'
            id='email'
            onChange={this.handleBooking}
            placeholder='Email'
          />

          <input
            className='form-control'
            id='roomId'
            onChange={this.handleBooking}
            placeholder='roomID'
          />

          <input
            className='form-control'
            id='checkInDate'
            onChange={this.handleBooking}
            placeholder='CheckInDate'
          />

          <input
            className='form-control'
            id='checkOutDate'
            onChange={this.handleBooking}
            placeholder='CheckOutDate'
          />

          <Button caption={'Confirm Booking'} />
        </form>
        <hr />
      </div>
    )
  }
}
export default BookingForm
