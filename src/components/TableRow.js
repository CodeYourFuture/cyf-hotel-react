import React from "react";
import moment from "moment";
const dateDifference = (start, end) => {
  const startMoment = moment(start);
  const endMoment = moment(end);
  return endMoment.diff(startMoment, "days");
};
class TableRow extends React.Component {
    state={
        isActive: false
    }
    toggleClass = () => {
        this.setState(({isActive})=>({isActive: !isActive}))
    }
  render() {
    const {
      id,
      title,
      firstName,
      surname,
      email,
      roomId,
      checkInDate,
      checkOutDate
    } = this.props;
    return (
      <tbody>
        <tr onClick={this.toggleClass} 
        className={this.state.isActive ? 'activeRow' : null}>
          <td>{id}</td>
          <td>{title}</td>
          <td>{firstName}</td>
          <td>{surname}</td>
          <td>{email}</td>
          <td>{roomId}</td>
          <td>{checkInDate}</td>
          <td>{checkOutDate}</td>
          <td>{dateDifference(checkInDate, checkOutDate)}</td>
        </tr>
      </tbody>
    );
  }
}
export default TableRow;
