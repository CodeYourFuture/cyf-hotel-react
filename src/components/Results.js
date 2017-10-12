import React from 'react';

const Results = function (props) {
    return (
        <table className="table results-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>First name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Room id</th>
              <th>Check in date</th>
              <th>Check out date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mr</td>
              <td>Person1</td>
              <td>Albbert</td>
              <td>abvc@vag.com</td>
              <td>55</td>
              <td>2019-02-11</td>
              <td>2019-03-01</td>
            </tr>
          </tbody>
        </table>
    )
}

export default Results;
