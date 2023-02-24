// Instructions: Create a <SearchResults /> component that shows hotel bookings in a <table> element.
// Each booking will have an id, title, first name, surname, email, room id, check in date and check out date.
// You can make up data in the <SearchResults /> component to show in the table.
// Then show <SearchResults /> component within the <Bookings /> component that is provided.
// Be sure to split out your components into small well-named components, similar to the method used in exercise 1.

// Hint: You will find some useful <table> examples in the Bootstrap documentation for tables.

// Test: A table should render with a column for each booking attribute. The table can show more than one booking.
// The bookings that are displayed can be made up and hardcoded for now.

import React from "react";

const SearchResults = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
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
          <td>PM</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>mark@mdo</td>
          <td>14</td>
          <td>23/02/2023</td>
          <td>25/02/2023</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Assistant</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Jacob@mdo</td>
          <td>15</td>
          <td>23/02/2023</td>
          <td>25/02/2023</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Software engineer</td>
          <td>Larry</td>
          <td>Bird</td>
          <td>Larry@mdo</td>
          <td>16</td>
          <td>23/02/2023</td>
          <td>25/02/2023</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
