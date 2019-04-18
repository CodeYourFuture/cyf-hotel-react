import React, { Component } from "react";
import moment from "moment";

class Highlight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlighted: false
    };
  }

  changeColor() {
    this.setState(previousState => {
      return {
        highlighted: !previousState.highlighted
      };
    });
  }

  render() {
    return (
      <tr
        className={this.state.highlighted ? "highlighted" : " "}
        onClick={() => this.changeColor()}
      >
        <td>{this.props.customer.id}</td>
        <td>{this.props.customer.title}</td>
        <td>{this.props.customer.firstName}</td>
        <td>{this.props.customer.surname}</td>
        <td>{this.props.customer.email}</td>
        <td>{this.props.customer.roomId}</td>
        <td>{this.props.customer.checkInDate}</td>
        <td>{this.props.customer.checkOutDate}</td>

        <td>
          {moment(this.props.customer.checkOutDate).diff(
            this.props.customer.checkInDate,
            "days"
          )}
        </td>
      </tr>
    );
  }
}

export default Highlight;
