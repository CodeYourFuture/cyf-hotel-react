import React from "react";
import SearchResult from "./SearchResult";
// import FakeBookings from "./data/fakeBookings.json";
// import Moment from "moment";

const SearchResults = props => {
  return (
    <div className="table">
      <tr>
        <th scope="col">id</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">email</th>
        <th scope="col">Room</th>
        <th scope="col">Check in date</th>
        <th scope="col">Check out date</th>
        <th scope="col">Number of Nights</th>
      </tr>
      {props.results.map(elem => (
        <SearchResult booking={elem} />
      ))}
    </div>
  );
};

// const SearchResultBody = props =>
// {
//     return (
//         <tbody>
//             <tr>
//                 <th scope="row">1</th>
//                 <td>Mrs</td>
//                 <td>Tandie</td>
//                 <td>Crow</td>
//                 <td>tcrows@gmail.co.uk</td>
//                 <td>30</td>
//                 <td>04/3/21</td>
//                 <td>11/03/21</td>
//             </tr>
//        </tbody>
//     );
// }

// const SearchResultBody2 = props =>
// {
//     return (
//         <tbody>
//             <tr>
//                 <th scope="row">2</th>
//                 <td>Mr</td>
//                 <td>Shakes</td>
//                 <td>console.table(object);</td>
//                 <td>shakes@gmail.co.uk</td>
//                 <td>50</td>
//                 <td>01/3/21</td>
//                 <td>20/03/21</td>
//             </tr>
//        </tbody>
//     );
// }

export default SearchResults;

// Instructions: Create a <SearchResults /> component that shows hotel bookings in a <table> element.
// Each booking will have an id, title, first name, surname, email, room id, check in date and
// check out date.You can make up data in the < SearchResults /> component to show in the table.Then show < SearchResults />
// component within the < Bookings /> component that is provided.Be sure to split out your components into small well - named components, similar to the method used in exercise 1.

// Hint: You will find some useful <table> examples in the Bootstrap documentation for tables.

// Test: A table should render with a column for each booking attribute. The table can show more than one booking. The bookings that are displayed can be made up and hardcoded for now.
