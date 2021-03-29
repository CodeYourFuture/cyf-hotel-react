import React from "react";
import SearchResult from "./SearchResult";

const SearchResults = props => {
  return (
    <table className="table">
      <thead>
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
      </thead>
      <tbody>
        {props.results.map(elem => (
          <SearchResult booking={elem} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;

//   ** Instructions:** Within the`<SearchResults />` component or its child components, add an`onClick`
// handler to each row in the table( hint: on the`<tr>` element ).When clicked, the row is "selected"
// and highlighted with a different colour.When clicked again, the row is unselected and the coloured
// highlighting is removed.

// ** Hint:** Use a new state variable for each row to record if the row is selected or not, and use
// this value to set a class to the`className` prop of the row.

// ** Test:** Verify that each row of your table can be highlighted( on and off ) independently
// when being clicked.
