import React, { Component } from 'react';
import moment from 'moment';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineId: 0
    };
  }

  toggle = e => {
    
    console.log('click')
    let line = e.target.parentNode.id;
    this.setState(previousState => ({
      lineId: line
    }));
  e.target.parentNode.style.backgroundColor = 'lightblue';
  };
  

  render() {
    return (
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tittle</th>
            <th scope="col">FirstName</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
            <th scope="col">Stay</th>
          </tr>
        </thead>
        <tbody>
          {this.props.results.map(result => {
            return (
              <tr  onClick={this.toggle}>
                <th scope="row">{result.id}</th>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>
                  {moment(result.checkOutDate).diff(result.checkInDate, 'days')}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default SearchResults;
