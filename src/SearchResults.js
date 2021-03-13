import React from "react";
function SearchResults(props) {
  console.log(props);
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">FirstName</th>
            <th scope="col">SurName</th>
            <th scope="col">Email</th>
            <th scope="col">RoomId</th>
            <th scope="col">check-in date</th>
            <th scope="col">check-out date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mrs</td>
            <td>Emma</td>
            <td>Jackson</td>
            <td>emma@Jackson.com</td>
            <td>123</td>
            <td>12/03/2020</td>
            <td>20/03/2020</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <th scope="row">3</th>
            <td />
            <td />
            <td />
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default SearchResults;
