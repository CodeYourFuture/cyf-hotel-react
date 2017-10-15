import React from 'react';

// Calculate number of days between two dates (in string).
function daysBetweenDates(dateStr1, dateStr2) {
  const date1 = new Date(dateStr1);
  const date2 = new Date(dateStr2);
  
  const diffSeconds = date2 - date1;
  const diffDays = Math.round(diffSeconds / (1000 * 60 * 60 * 24));
  return diffDays;
}

export default class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sortField: null,
      sortOrder: null,
    };
    this.toggleSort = this.toggleSort.bind(this);
    this.sortResults = this.sortResults.bind(this);
  }

  // Toggle the sort order of a field by modifying the state.
  toggleSort(field) {

    let sortOrder = 'asc';

    // If sort field already selected, just toggle the sort order.
    if (this.state.sortField === field) {
      sortOrder = this.state.sortOrder === 'asc' ? 'desc' : 'asc';
    }

    this.setState({
      ...this.state,
      sortField: field,
      sortOrder: sortOrder,
    });
  }

  // Sort the results and return it.
  sortResults() {

    // No need to sort.
    if (! this.state.sortField || ! this.state.sortOrder) {
      return this.props.results;
    }

    const sortedArray = this.props.results.sort((a, b) => {
      const val1 = a[this.state.sortField];
      const val2 = b[this.state.sortField];

      if (this.state.sortOrder === 'asc') {
        if (val1 > val2) { return 1; }
        else if (val1 < val2) { return -1; }
      }
      else {
        if (val1 > val2) { return -1; }
        else if (val1 < val2) { return 1; }
      }
      return 0;
    });
    return sortedArray;
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th onClick={() => {this.toggleSort('title');}}>Title</th>
            <th onClick={() => {this.toggleSort('firstName');}}>First name</th>
            <th onClick={() => {this.toggleSort('surname');}}>Surname</th>
            <th onClick={() => {this.toggleSort('email');}}>Email</th>
            <th onClick={() => {this.toggleSort('roomId');}}>Room ID</th>
            <th onClick={() => {this.toggleSort('checkInDate');}}>Check in date</th>
            <th onClick={() => {this.toggleSort('checkOutDate');}}>Check out date</th>
            <th>No. of days</th>
          </tr>
        </thead>
        <tbody>
          {this.sortResults().map( (result, index) =>
            <tr key={ index }>
              <td>{ result.title }</td>
              <td>{ result.firstName }</td>
              <td>{ result.surname }</td>
              <td>{ result.email }</td>
              <td>{ result.roomId }</td>
              <td>{ result.checkInDate }</td>
              <td>{ result.checkOutDate }</td>
              <td>{ daysBetweenDates(result.checkInDate, result.checkOutDate) }</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

