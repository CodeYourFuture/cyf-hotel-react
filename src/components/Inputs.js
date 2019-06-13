import React from "react";
class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: "",
        title: "",
        firstName: "",
        surname: "",
        roomId: "",
        checkInDate: "",
        checkOutDate: ""
      }
    };
  }
  handleChange = event => {
    const updateduser = this.state.user;
    updateduser[event.target.name] = event.target.value;
    this.setState({ user: updateduser });
    // this.setState({
    //   user: { ...this.state.user, [event.target.name]: event.target.value }
    // });
  };
  handelSubmit = e => {
    e.preventDefault();
    this.props.addBooking(this.state.user);
    console.log(this.state.user);
  };
  render() {
    return (
      <div>
        <form
          className="App_input_lest"
          type="text"
          onSubmit={this.handelSubmit}
        >
          <input
            placeholder="id"
            name="id"
            type="number"
            value={this.state.user.id}
            onChange={this.handleChange}
          />
          <input
            placeholder="title"
            name="title"
            type="text"
            value={this.state.user.title}
            onChange={this.handleChange}
          />
          <input
            placeholder="FirstName"
            name="firstName"
            type="text"
            value={this.state.user.firstName}
            onChange={this.handleChange}
          />
          <input
            placeholder="surname"
            name="surname"
            type="text"
            value={this.state.user.surname}
            onChange={this.handleChange}
          />
          <input
            placeholder="RoomID"
            name="roomId"
            type="number"
            value={this.state.user.roomId}
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

export default Inputs;
