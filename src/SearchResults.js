import React from 'react';

const SearchResults = () => {
    return (
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">email</th>
      <th scope="col">Room Id</th>
      <th scope="col">Check In Date</th>
      <th scope="col">Check Out Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>01</td>
      <td>Ms</td>
      <td>Adia</td>
      <td>Americana</td>
      <td>adiami@gmail.com</td>
      <td>101</td>
      <td>1 September 2019</td>
      <td>9 September 2019</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>02</td>
      <td>Ms</td>
      <td>Odette</td>
      <td>Oatfield</td>
      <td>odeeoatee@gmail.com</td>
      <td>102</td>
      <td>10 September 2019</td>
      <td>21 September 2019</td>
    </tr>
  </tbody>
</table>
    )
}
export default SearchResults;