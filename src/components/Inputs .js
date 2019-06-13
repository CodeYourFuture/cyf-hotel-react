import React from "react";
// import {TableRow} from "./SearchResults"
class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
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
    this.setState({ user: this.state.user.concat(event.target.value) });
  };
  // handleChangeTitle = (event) => {console.log(this.state.user.title)
  //   this.setState({
  //     user: {
  //       title: event.target.value
  //     },
  //   });
  // };
  // handleChangeFirstName = (event) => {console.log(this.state.user.firstName)
  //   this.setState({
  //     firstName: event.target.value,

  //   });
  // };
  // handleChangeSurName = (event) => {console.log(this.state.user.surname)
  //   this.setState({
  //       surname: event.target.value
  //   });
  // };
  // handleChangeRoomId = (event) => {console.log(this.state.user.roomId)
  //   this.setState({

  //       roomId: event.target.value,
  //   });
  // };
  // handleChangeCheckIn = (event) => {console.log(this.state.user.checkInDate)
  //   this.setState({
  //       checkInDate: event.target.value

  //   });
  // };
  // handleChangeCheckOUt = (event) => {console.log(this.state.user.checkOutDate)
  //   this.setState({
  //       checkOutDate: event.target.value,

  //   });
  // };
  handelSubmit = e => {
    e.preventDefault();
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
            placeholder="title"
            name="title"
            type="text"
            value={this.state.user.title}
            onChange={this.handleChang}
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
