import React from "react";

const SearchResults = () => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check-in Date</th>
          <th>Check-out Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mr</td>
          <td>Sam</td>
          <td>Pennington</td>
          <td>Spennington@london.com</td>
          <td>111</td>
          <td>2023-02-25</td>
          <td>2023-02-28</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Mrs</td>
          <td>Eliza</td>
          <td>Thomas</td>
          <td>EThomas@london.com</td>
          <td>222</td>
          <td>2023-02-25</td>
          <td>2023-02-28</td>
        </tr>
      </tbody>
    </table>
  );
};



export default SearchResults;
