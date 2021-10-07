import React from "react";
const SearchResults = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">TITLE</th>
          <th scope="col">FIRST NAME</th>
          <th scope="col">SURNAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">ROOM ID</th>
          <th scope="col">CHECK IN DATE</th>
          <th scope="col">CHECK OUT DATE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Miss</td>
          <td>Rebeca</td>
          <td>Lopez-Santos</td>
          <td>rebeca@codeYourFuture.com</td>
          <td>101</td>
          <td>29 December 2021</td>
          <td>02 January 2022</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mr</td>
          <td>Juanito</td>
          <td>Fernandez</td>
          <td>juan@nocode.com</td>
          <td>111</td>
          <td>09 December 2021</td>
          <td>15 December 2021</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Ms</td>
          <td>Surinder</td>
          <td>Clark</td>
          <td>surinder@banking.com</td>
          <td>11</td>
          <td>09 November 2021</td>
          <td>15 November 2021</td>
        </tr>
      </tbody>
    </table>
  );
};
export default SearchResults;
