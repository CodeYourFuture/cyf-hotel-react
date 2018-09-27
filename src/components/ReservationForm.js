import React from 'react';
//import Button from './Button';

class NewForm extends React.Component {
  state = {
    InputId: null,
    InputFirstName: null,
    InputSurname: null,
    InputEmail: null,
    InputRoomId: null,
    InputCheckInDate: null,
    InputCheckOutDate: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewReservations(this.state)
  }

  render() {
    return (
      <form action="/" method="post" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="InputId" >Id</label>
          <input type="Id"
            className="Form-control"
            onChange={this.handleChange}
            id="InputId"
            placeholder="Id" />
        </div>
        <div className="form-group">
          <label htmlFor="InputFirstName" >First Name</label>
          <input type="first_name"
            className="form-control"
            onChange={this.handleChange}
            id="InputFirstName"
            placeholder="First Name" />
        </div>
        <div className="form-group">
          <label htmlFor="InputSurname" >Surname</label>
          <input type="Surname"
            className="form-control"
            onChange={this.handleChange}
            id="InputSurname"
            placeholder="Surname" />
        </div>
        <div className="form-group">
          <label htmlFor="email" >Email</label>
          <input type="email"
            className="form-control"
            onChange={this.handleChange}
            id="InputEmail"
            placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="InputRoomId">Room Id</label>
          <input type="RoomId"
            className="form-control"
            onChange={this.handleChange}
            id="InputRoomId"
            placeholder="Room Id" />
        </div>
        <div className="form-group">
          <label htmlFor="InputCheckInDate">Check In Date</label>
          <input type="CheckInDate"
            className="form-control"
            onChange={this.handleChange}
            id="InputCheckInDate"
            placeholder="Check In Date" />
        </div>
        <div className="form-group">
          <label htmlFor="InputCheckOutDate">Check Out Date</label>
          <input type="CheckOutDate"
            className="form-control"
            onChange={this.handleChange}
            id="InputCheckOutDate"
            placeholder="Check Out Date" />
        </div>
        <button type="submit"
          className="btn btn-default">
          Submit
        </button>
        <hr />
      </form>


    )
  }
}

export default NewForm;