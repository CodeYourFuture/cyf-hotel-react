import React from "react";

const SearchResults = () => {
    return (
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>11</td>
            <td>Mr</td>
            <td>Moses</td>
            <td>Pharoah</td>
            <td>mark.pharoh@twitter.com</td>
            <td>101</td>
            <td>01-01-2023</td>
            <td>01-17-2023</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>12</td>
            <td>Dr</td>
            <td>Jonathan</td>
            <td>David</td>
            <td>jonathan.david@gmail.com</td>
            <td>102</td>
            <td>13-03-2023</td>
            <td>03-04-2023</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>13</td>
            <td>Ms</td>
            <td>Jane</td>
            <td>Austin</td>
            <td>janeaustin@hotmail.com</td>
            <td>103</td>
            <td>11-02-2023</td>
            <td>19-02-2023</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>14</td>
            <td>Madam</td>
            <td>Marrie</td>
            <td>Curie</td>
            <td>marie_curie@yahoo.com</td>
            <td>104</td>
            <td>05-03-2023</td>
            <td>09-04-2023</td>
          </tr>
        </tbody>
      </table>
    );
};

export default SearchResults;