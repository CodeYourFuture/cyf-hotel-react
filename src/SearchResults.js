import React from "react";

const SearchResults = ({result}) => {
return (
    <div>
    <table class="table">
    <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Room id</th>
      <th scope="col">Check in date</th>
      <th scope="col">Check out date</th>
    </tr>
  </thead>
  <SearchTable />
    </table>
    </div>
)  
}

const SearchTable = () => {
    return (
        <tbody>
        <tr>
          <th scope="row">Mr</th>
          <td>Mark</td>
          <td>Mehrabi</td>
          <td>Mikemehrabi@gmail.com</td>
          <td>1</td>
          <td>22-12-2022</td>
          <td>28-12-2022</td>
        </tr>
        </tbody>
    )
}


export default SearchResults;