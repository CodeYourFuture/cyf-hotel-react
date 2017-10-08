import React from 'react';

class SearchResultsTable extends React.Component {
  render() {
    return (
      <table className="table search-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>First name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check in date</th>
            <th>Check out date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mr</td>
            <td>First name</td>
            <td>Surname</td>
            <td>Email</td>
            <td>Room Id</td>
            <td>Check in date</td>
            <td>Check out date</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default SearchResultsTable;
