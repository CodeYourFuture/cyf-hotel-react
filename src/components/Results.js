import React from 'react';


export default class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // Which field (column) to sort by.
      sortField: null,
      // Order of sort: 'asc' or 'desc'.
      sortOrder: null,
      // Which rows are selected (active).
      selectedRows: [],
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

  toggleRowSelect(index) {
    // Clone the array as we're going to change it.
    let selectedRows = [...this.state.selectedRows];
    const selectedIndex = selectedRows.indexOf(index);
    // Row is already selected.
    if (selectedIndex !== -1) {
      // Remove the row from the list of selected rows.
      selectedRows = selectedRows.filter((item, idx) => idx !== selectedIndex);
    }
    else {
      // Add the row to the selected rows list.
      selectedRows.push(index);
    }
    this.setState({
      selectedRows: selectedRows,
    });
  }

  // Get the className of the row.
  getRowClass(index) {
    // This row is selected, return a Bootstrap class to highlight it.
    if (this.state.selectedRows.indexOf(index) !== -1) {
      return 'table-active';
    }
    else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <p>Results: {this.props.results.length} found, {this.state.selectedRows.length} selected</p>

        <table className='table'>
        {/* Set table class to style with included Bootstrap CSS. */}
          <thead>
            <tr>
              <th onClick={() => {this.toggleSort('title');}}>Title</th>
              <th onClick={() => {this.toggleSort('firstName');}}>First name</th>
              <th onClick={() => {this.toggleSort('surname');}}>Surname</th>
              <th onClick={() => {this.toggleSort('email');}}>Email</th>
              <th onClick={() => {this.toggleSort('roomId');}}>Room ID</th>
              <th onClick={() => {this.toggleSort('checkInDate');}}>Check in date</th>
              <th onClick={() => {this.toggleSort('checkOutDate');}}>Check out date</th>
              <th onClick={() => {this.toggleSort('numDays');}}>No. of days</th>
            </tr>
          </thead>
          <tbody>
            {this.sortResults().map( (result, index) =>
              <tr key={index} className={this.getRowClass(index)} onClick={() => this.toggleRowSelect(index)}>
                <td>{result.title }</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>{result.numDays}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

