import React from "react";

function SearchResults() {
  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
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
      <tr>
        <td>1</td>
        <td>Mr</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>marko@gmail.com</td>
        <td>53413</td>
        <td>17/05/2020</td>
        <td>22/05/2020</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Ms</td>
        <td>Jamie</td>
        <td>Springer</td>
        <td>jamie.s@outlook.com</td>
        <td>73214</td>
        <td>10/12/2019</td>
        <td>15/12/2019</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Mr</td>
        <td>Tom</td>
        <td>Nook</td>
        <td>tom.nook@hotmail.com</td>
        <td>12324</td>
        <td>20/09/2018</td>
        <td>24/09/2018</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Mrs</td>
        <td>Jodie</td>
        <td>Apple</td>
        <td>jodie.apple@hotmail.com</td>
        <td>67350</td>
        <td>29/11/2017</td>
        <td>08/12/2017</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Miss</td>
        <td>Haseena</td>
        <td>Begum</td>
        <td>h.begum@gmail.com</td>
        <td>89754</td>
        <td>13/08/2019</td>
        <td>15/08/2019</td>
      </tr>
    </table>
  );
}

export default SearchResults;
