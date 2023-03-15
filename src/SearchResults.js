import React, { useState } from "react";
// import moment from "moment";
import HighlightCustomerDetails from "./HighlightCustomerDetails";
import CustomerProfile from "./CustomerProfile";

function SearchResults(props) {
  const [customerID, setCustomerID] = useState(null);
 

  console.log(props.bookingResults);

  function handleShowProfile(id){
  setCustomerID(id);
  }
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
            <HighlightCustomerDetails key={result.id} result={result} handleShowProfile={handleShowProfile} />
          ))}
          
        </tbody>
      </table>
      {customerID && <CustomerProfile id={customerID}/>}
    </div>
  );
}



export default SearchResults;
