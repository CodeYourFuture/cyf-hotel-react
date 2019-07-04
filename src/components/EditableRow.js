import React, { Component } from "react";
import Button from "./Buttons";
class EditableRow extends Component {
  constructor(props) {
    super();
    this.state = {
      titleEditValue: props.title,
      firstNameEditValue: props.firstName,
      surnameEditValue: props.surname,
      emailEditValue: props.email,
      roomIdEditValue: props.roomId,
      checkInDateEditValue: props.checkInDate,
      checkOutDateEditValue: props.checkOutDate
    };
  }

  onChangeValue = event => {
    this.setState({
      [`${event.target.name}EditValue`]: event.target.value
    });
  };

  onSave = () => {
    this.props.saveRow(
      this.props.id,
      this.state.titleEditValue,
      this.state.firstNameEditValue,
      this.state.surnameEditValue,
      this.state.emailEditValue,
      this.state.roomIdEditValue,
      this.state.checkInDateEditValue,
      this.state.checkOutDateEditValue
    );
  };

  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>
          <input
            placeholder="title"
            name="title"
            type="text"
            value={this.state.titleEditValue}
            onChange={this.onChangeValue}
          />
        </td>
        <td>
          <input
            placeholder="FirstName"
            name="firstName"
            type="text"
            value={this.state.firstNameEditValue}
            onChange={this.onChangeValue}
          />
        </td>
        <td>
          <input
            placeholder="surname"
            name="surname"
            type="text"
            value={this.state.surnameEditValue}
            onChange={this.onChangeValue}
          />
        </td>
        <td>
          <input
            placeholder="email"
            name="email"
            type="email"
            value={this.state.emailEditValue}
            onChange={this.onChangeValue}
          />
        </td>
        <td>
          <input
            placeholder="RoomID"
            name="roomId"
            type="number"
            value={this.state.roomIdEditValue}
            onChange={this.onChangeValue}
          />
        </td>
        <td>
          <input
            placeholder="checkInDate"
            name="checkInDate"
            type="date"
            value={this.state.checkInDateEditValue}
            onChange={this.onChangeValue}
          />
        </td>
        <td>
          <input
            placeholder="CheckOutDate"
            name="checkOutDate"
            type="date"
            value={this.state.checkOutDateEditValue}
            onChange={this.onChangeValue}
          />
        </td>
        <td>
          <Button name="save" onClick={this.onSave} />
        </td>
      </tr>
    );
  }
}

export default EditableRow;
