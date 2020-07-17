import React from "react";

const SearchResults = props => {
  // console.log(props);
  // return (
  //     <div>
  //         <ul>
  //             <li>{props.FakeBookings}</li>
  //         </ul>
  //     </div>
  // );

  return (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>123</td>
            <td>Mr</td>
            <td>James</td>
            <td>Bond</td>
            <td>gmail.com</td>
            <td>321</td>
            <td>15/7/2020</td>
            <td>16/7/2020</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Bond</td>
            <td>gmail.com</td>
            <td>321</td>
            <td>15/7/2020</td>
            <td>16/7/2020</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>Bond</td>
            <td>gmail.com</td>
            <td>321</td>
            <td>15/7/2020</td>
            <td>16/7/2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default SearchResults;
