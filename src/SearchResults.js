import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ bookings, handleProfile }) => {
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody className="bodyClass">
          {bookings.map((booking, index) => {
            return (
              <TableRow
                key={index}
                rowData={booking}
                handleProfile={handleProfile}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
const TableRow = ({ rowData, handleProfile }) => {
  console.log(rowData);
  const [color, setColor] = useState("");
  function highLightRow() {
    if (color === "") {
      setColor("yellow");
    } else {
      setColor("");
    }
  }
  const [id, setId] = useState();
  // function handleProfile(e) {
  //   console.log(e.target.id);
  //   setProfileID(e.target.id);
  // }
  return (
    <tr onClick={highLightRow} className={color}>
      <td>{rowData.id}</td>
      <td>{rowData.title}</td>
      <td>{rowData.firstName}</td>
      <td>{rowData.surname}</td>
      <td>{rowData.email}</td>
      <td>{rowData.roomId}</td>
      <td>{rowData.checkInDate}</td>
      <td>{rowData.checkOutDate}</td>

      <td>
        {moment(rowData.checkOutDate).diff(moment(rowData.checkInDate), "days")}
      </td>
      <button id={rowData.id} onClick={handleProfile}>
        ShowProfile
      </button>
    </tr>
  );
};

export default SearchResults;
// Instructions: Add a new column in the table of the <SearchResults /> component and display a <button> for each row.
//  The text of the button should read "Show profile". Then, create a new <CustomerProfile /> component.
//  This component should be rendered next to the table in the <SearchResults /> component.
//  This component should receive one prop id. When clicking on a "Show profile" button for a given row,
//   the component <CustomerProfile /> should display the text "Customer Profile", where is the id of the selected customer.
//   Initially, the <CustomerProfile /> component doesn't show anything.

// Hint: You need to record the selected customer id after clicking on a "Show profile" button.
// In which component do you think this state should be defined?

// Test: When first showing the page, no customer profile is displayed.
// When clicking the first "Show profile" button of the table, the text "Customer 1 profile" appears.
// When clicking the second "Show profile" button of the table, the text "Customer 2 profile" appears instead.
