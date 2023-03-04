import React, { useState } from "react";
// import moment from "moment";
import HighlightCustomerDetails from "./HighlightCustomerDetails";

function SearchResults(props) {
  // const [selectedRows, setSelectedRows] = useState([]);
  // const clickedRows = (bookingDetails) => {
  //   const newSelectedRows = [...selectedRows];

  //   if (newSelectedRows.includes(bookingDetails)) {
  //     setSelectedRows(
  //       newSelectedRows.filter((eachRow) => eachRow !== bookingDetails)
  //     );
  //   } else {
  //     newSelectedRows.push(bookingDetails);
  //     setSelectedRows(newSelectedRows);
  //   }
  // };

  // function handleProfileButtonClick(id) {
  //   return setSelectedRows(id);
  // }

  console.log(props.bookingResults);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Total Num of Nights</th>
            <th scope="col">Customer Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.bookingResults.map((result) => (
            <HighlightCustomerDetails key={result.id} result={result} />
          ))}
        </tbody>
      </table>
      {/* <CustomerProfile /> */}
    </div>
  );
}

// function CustomerProfile(id) {
//   console.log(id);
//   return (
//     <div>
//       <p>Customer {} Profile</p>
//     </div>
//   );
// }

export default SearchResults;
