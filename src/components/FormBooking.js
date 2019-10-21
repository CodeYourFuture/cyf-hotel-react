import React, { Component } from "react";

export default class FormBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      title: "",
      firstName: "",
      surname: "",
      email: "",
      roomId: 0,
      checkInDate: "",
      checkOutDate: ""
    };
  }

  setValue = e => {
    const name = e.target.name;

    if ([name] !== "") {
      this.setState({
        [name]: e.target.value
      });
    } else {
      return;
    }
  };

  render() {
    return (
      <div className="container border">
        <form
          className="form-group row"
          onSubmit={e => {
            e.preventDefault();
            this.props.add(this.state);
          }}
        >
          <label className="input-group-text">TITLE</label>
          <input
            type="text"
            id="customerName"
            className="form-control text-capitalize mr-2 p-4 col-2"
            
            name="title"
            onChange={this.setValue}
          />
          <label className="input-group-text">First Name</label>
          <input
            type="text"
            id="customerName"
            className="form-control text-capitalize mr-2 p-4 col-2"
            
            name="firstName"
            onChange={this.setValue}
          />
          <label className="input-group-text">Surname</label>
          <input
            type="text"
            id="customerName"
            className="form-control text-capitalize mr-2 p-4 col-2"
            //   value={this.state.bokking.surname}
            name="surname"
            onChange={this.setValue}
          />
          <label className="input-group-text">Email</label>
          <input
            type="email"
            id="customerName"
            className="form-control p-4 mr-2 col-2"
            //   value={this.state.bokking.email}
            name="email"
            onChange={this.setValue}
          />
          <label className="input-group-text">Room ID</label>
          <input
            type="number"
            id="customerName"
            className="form-control p-4 mr-2 col-1"
            //   value={this.state.bokking.roomId}
            name="roomId"
            onChange={this.setValue}
          />
          <label className="input-group-text">Check In Date</label>
          <input
            type="date"
            id="customerName"
            className="form-control p-4 mr-2 col-3"
            //   value={this.state.bokking.checkInDate}
            name="checkInDate"
            onChange={this.setValue}
          />
          <label className="input-group-text">Check Out Date</label>
          <input
            type="date"
            id="customerName"
            className="form-control mr-2 p-4 col-3"
            //   value={this.state.bokking.checkOutDate}
            name="checkOutDate"
            onChange={this.setValue}
          />

          <button className="btn btn-block btn-primary " type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}
