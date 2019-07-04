import React from "react";

// to create an input form to insert new guest
class AddBookingGuestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      firstName: "",
      surname: "",
      email: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: ""
    };
  }
  // creating new object of entries
  handleChange = event => {
    const updateduser = this.state;
    console.log(updateduser);
    updateduser[event.target.name] = event.target.value;
    this.setState({
      state: updateduser,
      id: this.props.fakeBookingsList.length + 1
    });
  };
  // on submit add the value of the user object to the function addBoking "transfered as a props from bookings file"
  handelSubmit = e => {
    e.preventDefault();
    this.setState({ id: this.state.id + 1 });
    this.props.addBooking(this.state);
  };

  render() {
    return (
      <div>
        <form
          className="App-input-list"
          type="text"
          onSubmit={this.handelSubmit}
        >
          <input
            placeholder="id"
            type="hidden"
            value={this.state.id}
            // onSubmit={this.handelId}
          />
          <input
            placeholder="title"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            placeholder="FirstName"
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            placeholder="surname"
            name="surname"
            type="text"
            value={this.state.surname}
            onChange={this.handleChange}
          />
          <input
            placeholder="email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            placeholder="RoomID"
            name="roomId"
            type="number"
            value={this.state.roomId}
            onChange={this.handleChange}
          />
          <input
            placeholder="checkInDate"
            name="checkInDate"
            type="date"
            value={this.state.checkInDate}
            onChange={this.handleChange}
          />
          <input
            placeholder="CheckOutDate"
            name="checkOutDate"
            type="date"
            value={this.state.checkOutDate}
            onChange={this.handleChange}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default AddBookingGuestForm;
