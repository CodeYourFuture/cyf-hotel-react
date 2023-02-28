import React from "react";


function SearchResults(props) {
  let nigthDifference = 0
  // let a = moment([2007, 0, 29])
  // let b = moment([2007, 0, 28])
  // let nigthDifference = a.diff(b, 'days') // 1

  let tr = props.results.map((element) => (
    <tr className="tableRow">
      <td>{element.id}</td>
      <td>{element.title}</td>
      <td>{element.firstName}</td>
      <td>{element.surname}</td>
      <td>{element.email}</td>
      <td>{element.roomId}</td>
      <td>{element.checkInDate}</td>
      <td>{element.checkOutDate}</td>
      <td>{nigthDifference}</td>
    </tr>
  ));

  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Ckeck in</th>
          <th scope="col">Ckeck out</th>
          <th scope="col">Nigths</th>
        </tr>
      </thead>
      <tbody>{tr}</tbody>
    </table>
  );
}

export default SearchResults;
