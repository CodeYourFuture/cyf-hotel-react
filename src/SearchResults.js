import React from "react";
import "./App.css";

const SearchResults = () => {
  return (
    <>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check In Date</th>
            <th>Check Out Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Mr.</td>
            <td>John</td>
            <td>Doe</td>
            <td>john.doe@example.com</td>
            <td>101</td>
            <td>2023-06-16</td>
            <td>2023-06-20</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ms.</td>
            <td>Jane</td>
            <td>Smith</td>
            <td>jane.smith@example.com</td>
            <td>102</td>
            <td>2023-06-21</td>
            <td>2023-06-25</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Dr.</td>
            <td>Peter</td>
            <td>Jones</td>
            <td>peter.jones@example.com</td>
            <td>103</td>
            <td>2023-06-26</td>
            <td>2023-07-01</td>
          </tr>

          <tr>
            <td>4</td>
            <td>Ms.</td>
            <td>Susan</td>
            <td>Williams</td>
            <td>susan.williams@example.com</td>
            <td>104</td>
            <td>2023-07-03</td>
            <td>2023-07-07</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Mr.</td>
            <td>David</td>
            <td>Brown</td>
            <td>david.brown@example.com</td>
            <td>105</td>
            <td>2023-07-08</td>
            <td>2023-07-12</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SearchResults;
