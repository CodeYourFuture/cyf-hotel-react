import React from 'react';

const SearchResult = props => (
  <div className="search">
    <div className="page-header">
      <h4 className="text-left">Results</h4>
    </div>
    <div className="row">
      <div className="col">
        <table className="table search-table">
          <thead>
            <tr>
              <th onClick={() => props.sortBy('title')}>Title</th>
              <th onClick={() => props.sortBy('firstName')}>First name</th>
              <th onClick={() => props.sortBy('surname')}>Surname</th>
              <th onClick={() => props.sortBy('email')}>Email</th>
              <th />
              <th>Room id</th>
              <th>Check in date</th>
              <th>Check out date</th>
              <th>Total Days</th>
            </tr>
          </thead>
          <tbody>
            {
              props.data.map((row,index)=> (
              <tr key = {index}>
                <td>{row.title}</td>
                <td>{row.firstName}</td>
                <td>{row.surname}</td>
                <td>{row.email}</td>
                <td />
                <td>{row.roomId}</td>
                <td>{row.checkInDate}</td>
                <td>{row.checkOutDate}</td>
                <td >{parseInt((new Date(row.checkOutDate) - new Date(row.checkInDate)) / (1000 * 60 * 60 * 24))} days</td>
              </tr>))
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default SearchResult;
