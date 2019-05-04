import React, { Component } from "react";
import Button from "./Button";
class BookingForm extends Component {
  handleSubmit = event => {
   // console.log(this.state);
    this.props.addBooking(this.state);
    event.preventDefault();
  };
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
      
    });
  };
  render() {
    return (
      <div className="newBooking__Form">
        <h3>Add New Booking </h3>
        <div className="form__wrapper">
          <form onSubmit={this.handleSubmit}>
          <div className="input__wrapper">
            <input id="id" onChange={this.handleChange} placeholder="ID" />
            <br />
            <input
              id="title"
              onChange={this.handleChange}
              placeholder="Title"
            />
            <br />
            <input
              id="firstName"
              onChange={this.handleChange}
              placeholder="FirstName"
            />
            <br />
            <input
              id="surname"
              onChange={this.handleChange}
              placeholder="Surname"
            />
            <br />
            <input
              id="email"
              onChange={this.handleChange}
              placeholder="Email"
            />
            <br />
            <input
              id="roomId"
              onChange={this.handleChange}
              placeholder="RoomID"
            />
            <br />
            <input
              id="checkInDate"
              onChange={this.handleChange}
              placeholder="CheckInDate"
            />
            <br />
            <input
              id="checkOutDate"
              onChange={this.handleChange}
              placeholder="CheckOutDate"
            />
            <br />
            <Button type={"submit"} />
            {/* <div className=" addBooking__form">
          <div className="table-responsive">
            <table className="addBooking__table">
              <tbody>
                <tr>
                  <td>
                    ID
                    <input id="id" onChange={this.handleChange} /><br />
                  </td>

                  <td>
                    title
                    <input id="title" onChange={this.handleChange} /><br />
                  </td>

                  <td>
                    FirstName
                    <input id="firstName" onChange={this.handleChange} />
                  </td>

                  <td>
                    Surname
                    <input id="surname" onChange={this.handleChange} />
                  </td>

                  <td>
                    Email
                    <input id="email" onChange={this.handleChange} />
                  </td>

                  <td>
                    Room ID
                    <input id="roomId" onChange={this.handleChange} />
                  </td>

                  <td>
                    CheckInDate
                    <input id="checkInDate" onChange={this.handleChange} />
                  </td>
                  <td>
                    CheckoutDate
                    <input id="checkOutDate" onChange={this.handleChange} />
                  </td>
                  <td />
                  <td>
                 <Button type={"submit"} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default BookingForm;
