import React, { Component } from "react";
import moment from "moment";

const diffDays = (checkInDate, checkOutDate) => {
  return moment(checkOutDate).diff(moment(checkInDate), "days");
};
export default class Row extends Component {
  constructor() {
    super();
    this.state = {
      isSelected: false
    };
  }

  selectHandler = () => {
    this.setState({
      isSelected: !this.state.isSelected
    });
    if (!this.state.isSelected) {
      this.props.onSelected();
    } else if (this.state.isSelected) {
      this.props.deSelected();
    }
  };

  render() {
    console.log(this.state.counter);
    return (
      <tr
        onClick={this.selectHandler}
        className={this.state.isSelected ? "myStyle" : ""}
      >
        <td>{this.props.reservation.id}</td>
        <td>{this.props.reservation.title}</td>
        <td>{this.props.reservation.firstName}</td>
        <td>{this.props.reservation.surname}</td>
        <td>{this.props.reservation.email}</td>
        <td>{this.props.reservation.checkInDate}</td>
        <td>{this.props.reservation.checkOutDate}</td>
        <td>{this.props.reservation.roomId}</td>
        <td>
          {diffDays(
            this.props.reservation.checkInDate,
            this.props.reservation.checkOutDate
          )}{" "}
        </td>
      </tr>
    );
  }
}
