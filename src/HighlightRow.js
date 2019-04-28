import React from "react";
import moment from "moment";

class HightlightRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: false
    };
  }
  toggleHighlight() {
    this.setState({ highlight: !this.state.highlight });
    console.log(this.state.highlight);
  }

  //state.highlight is equiv to line 7, ! adding this flips that value to true.
  render() {
    return (
      <tr
        onClick={() => this.toggleHighlight()}
        className={this.state.highlight ? "highlighted" : null}
      >
        <td> {this.props.booking.id} </td>
        <td> {this.props.booking.title} </td>
        <td> {this.props.booking.firstName} </td>
        <td> {this.props.booking.surname} </td>
        <td> {this.props.booking.email} </td>
        <td> {this.props.booking.roomId} </td>
        <td> {this.props.booking.checkInDate} </td>
        <td> {this.props.booking.checkOutDate} </td>
        <td>
          {" "}
          {moment(this.props.booking.checkOutDate).diff(
            this.props.booking.checkInDate,
            "days"
          )}{" "}
        </td>
        {/* diff is a external function from moment.   */}
      </tr>
    );
  }
}
//key u can make up. value of state must always be JS.
//the initial state is what it will start with thus will be false as no colour will be there before something happens.

// method is just a function that u have defined on a class,
//highlight one, cmd d selects the item next to what u have selected and places the
//cursor there so u can add stuff at once.keep pressing cmd d to grab more of them.

export default HightlightRow;
