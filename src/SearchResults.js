import React from "react";

function SearchResults(props) {

    let tr = props.results.map((element)=>
    <tr className="tableRow">
    <td>{element.Id}</td>
    <td>{element.First}</td>
    <td>{element.Last}</td>
    <td>{element.Email}</td>
    <td>{element.RoomId}</td>
    <td>{element.CheckIn}</td>
    <td>{element.CheckOut}</td>
    </tr>
    )

  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Ckeck in</th>
          <th scope="col">Ckeck out</th>
        </tr>
      </thead>
      <tbody>
        {tr}
      </tbody>
    </table>
  );
}

export default SearchResults;
