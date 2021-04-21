import React from "react";

const SearchResults = () => {
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mr</td>
            <td>Daniel</td>
            <td>Ghanbari</td>
            <td>Dan@gmail.com</td>
            <td>101</td>
            <td>01-05-2021</td>
            <td>10-05-2021</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
