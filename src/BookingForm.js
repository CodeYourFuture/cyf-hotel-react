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
      <form onSubmit={this.handleSubmit}>
        <div className=" addBooking__form">
          <div className="table-responsive">
            <table className="addBooking__table">
              <tbody>
                <tr>
                  <td>
                    ID
                    <input id="id" onChange={this.handleChange} />
                  </td>

                  <td>
                    title
                    <input id="title" onChange={this.handleChange} />
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
        </div>
      </form>
    );
  }
}
export default BookingForm;
