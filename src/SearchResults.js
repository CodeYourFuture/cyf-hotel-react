import React, { useState } from "react";
import Tbody from "./Tbody.js";
import CustomerProfile from "./CustomerProfile";
// console.log(fakeBookings);
let SearchResults = props => {
  const [suspect, setSuspect] = useState([]);

  const [suspectId, setSuspectId] = useState(-1);
  const bookings = props.bookings;
  const handleShow = event => {
    setSuspectId(event.target.value);

    // const something = id => {
    //   console.log(bookings);
    //   console.log(suspectId);
    //   return bookings[0] ;
    // };

    // setSuspect(something(suspectId));
    // console.log(suspect);
  };
  return (
    <div>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">days stayed</th>
            <th scope="col">details button</th>
          </tr>
        </thead>
        <Tbody bookings={props.bookings} handleShow={handleShow} />
      </table>
      <CustomerProfile suspect={suspectId} />
    </div>
  );
};

export default SearchResults;
