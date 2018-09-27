import React from 'react';
import TableRow from './TableRow';

//import FakeBookings from '../data/fakeBookings.json';

class ResultTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      reservations: this.props.reservations,
      //reservations: []
      rowSelected: 0
      
    }
  }

  onClickHandler = (e) => {
    console.log('fire')
    this.setState({ reservations: e.target.value })

  }

sortingHandler() {
  const {reservations} = this.state
  let newReservations = reservations
    console.log('sort')
    this.setState({
      reservations: newReservations.sort((a, b) => a.firstName > b.firstName)
      //reverse: !this.state.reverse,  
    }); 
  }

increaseCount = () => {
  this.setState ({
    rowSelected: this.state.rowSelected + 1
  })

  }

  decreaseCount = () => {
    this.setState({
      rowSelected: this.state.rowSelected - 1
    })
  }
  
  render() {

    return (
      <div>
      <div>Selected Row: {this.state.rowSelected}</div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th><button className="sortBy"
              onClick={() => this.sortingHandler('firstName')}>
              First Name
              </button>
            </th>
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
              <TableRow row={row} 
              onSelected={this.increaseCount}
              deSelected={this.decreaseCount}/>
            ))
          }

        </tbody>
      </table>
      
      </div>
      
    )
  }
}
//console.log(diffDays());

export default ResultTable;
