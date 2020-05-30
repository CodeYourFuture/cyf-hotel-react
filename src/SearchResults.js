import React from "react";

const SearchResults = props => {
  return (
    <div className="table">
      <table>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">firstName</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">roomId</th>
          <th scope="col">checkInDate</th>
          <th scope="col">checkOutDate</th>
        </tr>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mr</td>
            <td>Harris</td>
            <td>Sheraz</td>
            <td>harris@gmail.com</td>
            <td>Id n.1</td>
            <td>02/10/20</td>
            <td>03/11/20</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Miss</td>
            <td>Aila</td>
            <td>Sheraz</td>
            <td>Aila@gmail.com</td>
            <td>Id n.2</td>
            <td>02/10/20</td>
            <td>03/11/20</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Jr</td>
            <td>Gon</td>
            <td>Freecss</td>
            <td>Gon@gmail.com</td>
            <td>Id n.3</td>
            <td>02/10/20</td>
            <td>03/11/20</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Dr</td>
            <td>Steaven</td>
            <td>Strange</td>
            <td>Strange@gmail.com</td>
            <td>Id n.4</td>
            <td>02/10/20</td>
            <td>03/11/20</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Miss</td>
            <td>Kim</td>
            <td>Posibel</td>
            <td>Kim@gmail.com</td>
            <td>Id n.5</td>
            <td>02/10/20</td>
            <td>03/11/20</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Dr</td>
            <td>Jonny</td>
            <td>Browo</td>
            <td>Jonny@gmail.com</td>
            <td>Id n.6</td>
            <td>02/10/20</td>
            <td>03/11/20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
