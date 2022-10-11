import React from "react";

const SearchResults = () => {
  return (
    <table className="table ">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mr</td>
          <td>Riyaaz</td>
          <td>Singh</td>
          <td>riyaaz@gmail.com</td>
          <td>0422</td>
          <td>date in</td>
          <td>date out</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mr</td>
          <td>John</td>
          <td>Doe</td>
          <td>johndoe@gmail.com</td>
          <td>0423</td>
          <td>date in</td>
          <td>date out</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Mrs</td>
          <td>Jane</td>
          <td>Doe</td>
          <td>janedoe@gmail.com</td>
          <td>0424</td>
          <td>date in</td>
          <td>date out</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
