import React from 'react';
import moment from 'moment';


//import FakeBookings from '../data/fakeBookings.json';

class ResultTable extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      reservations: this.props.reservations
    }
  }

  // componentWillReceiveProps(newProps) {
  //   if(newProps.reservations !== this.props.reservations) {
  //     this.setState({reservations: newProps.reservations})
  //   }
  // }

  onClickHandler = (e) => {
    this.setState({ reservations: e.target.td })
    console.log(this.onClickHandler)
  }
  render() {

    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>email</th>
            <th>roomId</th>
            <th>Check In Date</th>
            <th>Check Out Date</th>
            <th>Number Of Stay</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.reservations.map(row => (
              <tr onClick={this.onClickHandler}>
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.firstName}</td>
                <td>{row.surname}</td>
                <td>{row.email}</td>
                <td>{row.roomId}</td>
                <td>{row.checkInDate}</td>
                <td>{row.checkOutDate}</td>
                <td>{diffDays(row.checkInDate, row.checkOutDate)}</td>
              </tr>
            ))
          }

        </tbody>
      </table>
    )

    function diffDays(checkInDate, checkOutDate) {

      var checkInMoment = moment(checkInDate);
      var checkOutMoment = moment(checkOutDate);

      return checkOutMoment.diff(checkInMoment, 'days')

    }
  }
}
//console.log(diffDays());

export default ResultTable;
