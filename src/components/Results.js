import React from 'react';
//import moment from 'moment';
import TableRow from './TableRow';

//import FakeBookings from '../data/fakeBookings.json';

class ResultTable extends React.Component {

  constructor(props) {
    super(props)
    //console.log(props)
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
    console.log('fire')
    this.setState({ reservations: e.target.value })
    
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
              <TableRow row={row}/>
            ))
          }

        </tbody>
      </table>
    )

    // function diffDays(checkInDate, checkOutDate) {

    //   var checkInMoment = moment(checkInDate);
    //   var checkOutMoment = moment(checkOutDate);

    //   return checkOutMoment.diff(checkInMoment, 'days')

    // }
  }
}
//console.log(diffDays());

export default ResultTable;
