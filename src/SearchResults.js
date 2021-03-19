import React from "react";

export const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">E-mail</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out Date</th>
            <th scope="col">Number of Nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => (
            <tr>
              <th key={index} scope="row">
                {item.title}
              </th>
              <th key={index} scope="row">
                {item.firstName}
              </th>
              <th key={index} scope="row">
                {item.surname}
              </th>
              <th key={index} scope="row">
                {item.email}
              </th>
              <th key={index} scope="row">
                {item.id}
              </th>
              <th key={index} scope="row">
                {item.id}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
