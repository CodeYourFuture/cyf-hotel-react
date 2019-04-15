import React from "react";

const SearchResults = props => {
  <table>
    {props.results.map(data => {
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">FirstName</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.firstname}</td>
          </tr>
        </tbody>
      </table>;
    })}
  </table>;
};
export default SearchResults;
