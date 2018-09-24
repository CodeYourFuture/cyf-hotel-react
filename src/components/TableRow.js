import React, { Component } from 'react';
import moment from 'moment';

export default class TableRow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isSelected: false
    }
  }

  onSelect = () => {
    console.log('mouse')
    this.setState({ isSelected: !this.state.isSelected })

  }

  render() {
    return (
      <tr className={this.state.isSelected ? 'isSelected' : null}
        onClick={this.onSelect}
      >
        <td>{this.props.row.id}</td>
        <td>{this.props.row.title}</td>
        <td>{this.props.row.firstName}</td>
        <td>{this.props.row.surname}</td>
        <td>{this.props.row.email}</td>
        <td>{this.props.row.roomId}</td>
        <td>{this.props.row.checkInDate}</td>
        <td>{this.props.row.checkOutDate}</td>
        <td>{diffDays(this.props.row.checkInDate, this.props.row.checkOutDate)}</td>
      </tr>
    )
  }

}
function diffDays(checkInDate, checkOutDate) {

  var checkInMoment = moment(checkInDate);
  var checkOutMoment = moment(checkOutDate);

  return checkOutMoment.diff(checkInMoment, 'days')

}
