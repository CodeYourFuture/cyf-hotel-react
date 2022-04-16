import React from "react";

const SearchResults = () => {
  return (
    <div>
      <table className="table">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check-in Date</th>
        </tr>
        <tr>
          <td>1234</td>
          <td>Mr</td>
          <td>J</td>
          <td>Digger</td>
          <td>jd@g.co</td>
          <td>567</td>
          <td>17/04/2022</td>
        </tr>
      </table>
    </div>
  );
};

export default SearchResults;
