import React, { Component } from "react";
import Button from "./Button.js";

export default class AddBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormDisplayed: false,
      newBooking: {},
      isFormSubmitted: false
    };
  }

  toggleInputForm = () => {
    this.setState({ isFormDisplayed: !this.state.isFormDisplayed });
  };

  addBooking = e => {
    const newBooking = Object.assign({}, this.state.newBooking);
    newBooking["id"] = this.props.id + 1;
    newBooking[e.target.name] = e.target.value;
    this.setState({ newBooking: newBooking });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleBooking(this.state.newBooking);
    this.bookingFormRef.reset();
    this.setState({ isFormSubmitted: true });
  };

  render() {
    return (
      <div style={divStyle} className="xs-col-12 sm-col-6 add-booking">
        <h4 className="text-center">
          Add Bookings
          <Button
            style={{ marginLeft: "30px" }}
            handleClick={this.toggleInputForm}
            content={this.state.isFormDisplayed ? "Add ˄" : "Add ˅"}
            type="text"
          />
        </h4>
        {this.state.isFormDisplayed && (
          <form
            onSubmit={this.handleSubmit}
            ref={element => (this.bookingFormRef = element)}
            className="form-group"
          >
            {this.props.formFields.map(field => {
              return (
                <input
                  ref={this.setInputRef}
                  type="text"
                  placeholder={field[0]}
                  name={field[1]}
                  onChange={this.addBooking}
                  className="form-control"
                />
              );
            })}
            <Button content="Submit" type="submit" />
          </form>
        )}
      </div>
    );
  }
}

const divStyle = {
  margin: "0 auto"
};
