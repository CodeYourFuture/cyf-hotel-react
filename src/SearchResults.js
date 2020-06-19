import React, { useState } from "react";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile"

const SearchResults = (props) => {

  return (
    <div className="table">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>

          </tr>
        </thead>
        <tbody>
          {props.results.map((result) => (
           <TableRow result={result} id={result.id} />
          ))}
        </tbody>
        <tbody>
        <th scope="col"><button onClick={()=>{props.results.map((result) => (
           <CustomerProfile id={result.id} />
          ))}}>Show Profile</button></th>
          {/* {} */}
        </tbody>
      </table>
      
    </div>
  );
};

export default SearchResults;

// #### 20. Display a customer profile - step 1

// **Instructions:** Add a new column in the table of
//  the `<SearchResults />` component and display a `<button>` 
//  for each row. The text of the button should read "Show profile". 
//  Then, create a new `<CustomerProfile />` component. This component
//   should be rendered next to the table in the `<SearchResults />`
//    component. This component should receive one prop `id`. When 
//    clicking on a "Show profile" button for a given row, the 
//    component `<CustomerProfile />` should display the text 
//    "Customer <ID> Profile", where <ID> is the id of the selected 
//    customer. Initially, the `<CustomerProfile />` component doesn't 
//    show anything.

// **Hint:** You
//  need to record the selected customer id after clicking
//   on a "Show profile" button. In which component do you think this
//    state should be defined?

// **Test:** When first showing the page, no customer profile is 
// displayed. When clicking the first "Show profile" button of the table,
//  the text "Customer 1 profile" appears. When clickong the second "Show
//   profile" button of the table, the text "Customer 2 profile" appears 
//   instead.