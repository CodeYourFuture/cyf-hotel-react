import React from "react";

// function myFunction(value) {
// return 'hi' + value;
// }

// const myFunction = value => (
// 'hi'+value
// );
import SearchButton from "./SearchButton.js";
const Search = props => (
  <div className="search">
    <div className="page-header">
      <h4 className="text-left">Search Bookings</h4>
    </div>
    <div className="row search-wrapper">
      <div className="col">
        <div className="form-group search-box">
          <SearchButton search="Search Id" name="Customer Id" />
          <SearchButton search="Search Name" name="Customer Name" />
          <table>
            <tr>
              <th> Title </th>
              <th> FirstName </th>
              <th> Surname </th>
              <th> Email </th>
              <th> room Id </th>
              <th> Check-in date </th>
              <th> Check-out-date </th>
            </tr>
            <tr>
              <td>Mr</td>
              <td>Person1</td>
              <td>Else</td>
              <td>person1@else.com</td>
              <td>1</td>
              <td>2017-11-21</td>
              <td>2017-11-28</td>
            </tr>
            <tr>
              <td>Mrs</td>
              <td>Person2</td>
              <td>Else</td>
              <td>Person2@else.com</td>
              <td>2</td>
              <td>2017-11-21</td>
              <td>2017-11-28</td>
            </tr>

            <tr>
              <td>Mr</td>
              <td>Person3</td>
              <td>Else</td>
              <td>person3@else.com</td>
              <td>3</td>
              <td>2017-11-21</td>
              <td>2017-11-28</td>
            </tr>

            <tr>
              <td>Mrs</td>
              <td>Person4</td>
              <td>Else</td>
              <td>person4@else.com</td>
              <td>4</td>
              <td>2017-11-21</td>
              <td>2017-11-21</td>
            </tr>

            <tr>
              <td> Mr </td>
              <td> person5 </td>
              <td> Else </td>
              <td> person5@else.com </td>
              <td> 5 </td>
              <td> 2017-11-21 </td>
              <td> 2017-11-28 </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default Search;
