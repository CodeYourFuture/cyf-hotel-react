import React, { Component } from "react";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowsSelected: new Set(),
      orderBy: {}
    };
  }

  orderData = (e) => {
    if (!this.props.bookingResults) return;
    let elementId = e.target.id;

    if (this.state.orderBy[elementId]) {
      let prevValue = this.state.orderBy[elementId];
      this.setState({orderBy: {[elementId]: -1 * prevValue}});  
      } else {
        this.setState({orderBy: {[elementId]: 1}});  
    } 
  };

  toggleSelectRow = (e) => {
    let rowId = e.target.parentNode.id;
    let newRowsSelected = new Set(this.state.rowsSelected);
    if (newRowsSelected.has(rowId)) {
      newRowsSelected.delete(rowId);
    } else {
      newRowsSelected.add(rowId);
    }

    this.setState({rowsSelected: newRowsSelected});
  };

  getDataReady = (data) => {

    let newData = [...data];
    if (!(this.state.orderBy.length === 0)) {
      let orderBy = this.state.orderBy;
      let orderByKey = Object.keys(orderBy)[0];
      newData = data.sort((row1, row2) => {
        if (row1[orderByKey] > row2[orderByKey]) return orderBy[orderByKey] * 1;
        if (row1[orderByKey] < row2[orderByKey]) return orderBy[orderByKey] * -1;
        return 0;
      });
    }

    return newData.map((row, idx) => (
      <tr key={idx} id={row.uid} style={{backgroundColor: (this.state.rowsSelected.has(row.uid.toString())) ? "#AAA" : "transparent"}}>
        <td>{row.title}</td>
        <td>{row.firstName}</td>
        <td>{row.surname}</td>
        <td>{row.email}</td>
        <td>{row.roomId}</td>
        <td>{row.checkInDate}</td>
        <td>{row.checkOutDate}</td>
        <td>{row.numberOfDays}</td>
      </tr>
    ));
  }

  render() {
    console.log('Re-rendering');
    this.state.rowsSelected.forEach(value => console.log(value));
    return (
      <div>
        <h4>Results ({(this.props.bookingResults) ? this.props.bookingResults.length : 0} found {(this.state.rowsSelected.size > 0) ? this.state.rowsSelected.size + ' selected' : ''})</h4>
        <table>
          <thead onClick={this.orderData}>
            <tr>
              <th id="title">Title</th>
              <th id="firstName">First name</th>
              <th id="surname">Surname</th>
              <th id="email">Email</th>
              <th id="roomId">Room ID</th>
              <th id="checkInDate">Check in date</th>
              <th id="checkOutDate">Check out date</th>
              <th id="numberOfDays">Days</th>
            </tr>
          </thead>
          <tbody onClick={this.toggleSelectRow}>
            {this.getDataReady(this.props.bookingResults)}
          </tbody>
        </table>
        {(this.props.errorLoadingData) ? (<em>Failed to retrive booking data</em>) : ''}
        {(this.props.loadingData) ? (<em>Loading booking data</em>) : ''}
      </div>
    );
  }
}


export default Results;