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
      customer_id,
      title,
      first_name,
      surname,
      email,
      room_id,
      check_in_date,
      check_out_date
    } = this.props;
    return <tbody>
        <tr onClick={this.toggleClass} className={this.state.isActive ? "activeRow" : null}>
          <td>{customer_id}</td>
          <td>{title}</td>
          <td>{first_name}</td>
          <td>{surname}</td>
          <td>{email}</td>
          <td>{room_id}</td>
          <td>{check_in_date}</td>
          <td>{check_out_date}</td>
          <td>
            {
              (check_in_date&&
              check_out_date&&
              dateDifference(check_in_date, check_out_date))
            }
          </td>
        </tr>
      </tbody>;
  }
}
export default TableRow;
