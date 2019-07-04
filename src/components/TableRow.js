import React from "react";
import moment from "moment";
import Button from "./Buttons";
export class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      style: {}
    };
  }

  onClicked = () => {
    this.setState(previousState => {
      if (previousState.isClicked === false)
        return {
          isClicked: !previousState.isClicked,
          style: { backgroundColor: "skyblue" }
        };
      else {
        if (previousState.isClicked)
          return {
            isClicked: !previousState.isClicked,
            style: { backgroundColor: "" }
          };
      }
    });
  };
  onClickDeleteButton = () => {};
  deleteEntry = entry => {
    this.setState({
      paymentData: this.state.paymentData.filter(payment => payment !== entry)
    });
  };

  render() {
    return (
      <tr
        className={this.props.item.id}
        key={this.props.item.id}
        onClick={this.onClicked}
        style={this.state.style}
      >
        <td className="tablebody">{this.props.item.id}</td>
        <td className="tablebody">{this.props.item.title}</td>
        <td className="tablebody">{this.props.item.firstName}</td>
        <td className="tablebody">{this.props.item.surname}</td>
        <td className="tablebody">{this.props.item.email}</td>
        <td className="tablebody">{this.props.item.roomId}</td>
        <td className="tablebody">{this.props.item.checkInDate}</td>
        <td className="tablebody">{this.props.item.checkOutDate}</td>
        <td className="tablebody">
          {moment(this.props.item.checkOutDate).diff(
            moment(this.props.item.checkInDate),
            "days"
          )}
        </td>
        <td className="tableRow-buttons">
          {" "}
          <Button name="Delete" onClick={this.props.deleteButton} />
          <Button name="Edit" onClick={this.props.editRow} />
        </td>
      </tr>
    );
  }
}

export default TableRow;
