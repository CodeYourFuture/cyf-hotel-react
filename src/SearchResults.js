import moment from "moment";
import React, { useState } from "react";
import OneRecord from "./OneRecord";
import CustomerProfile from "./CustomerProfile";
import "./App.css";
import SortColumnAsc from "./SortColumnAsc";

const HotelBookings = [
  `Id`,
  `Title`,
  `First name`,
  `Surname`,
  `Email`,
  `Room id`,
  `Check in date`,
  `Check out date`
];
const SearchResults = props => {
  console.log("here is new form " + props.newForm);
  const [customerId, setCustomerId] = useState("");

  const customerProfileHandler = event => {
    setCustomerId(event.target.id);
  };

  return (
    <div class="BookingTable">
      <table>
        <tr>
          {HotelBookings.map(element => {
            return (
              <SortColumnAsc element={element} data={props.fakeBookings} />
            );
          })}
          <th>Nights</th>
          <th>Show profile</th>
        </tr>
        {props.fakeBookings.map((item, index) => {
          return (
            <OneRecord
              item={item}
              updateId={customerProfileHandler}
              class="select"
            />
          );
        })}
        {/*        
        <OneRecord
          item={props.newForm}
          updateId={customerProfileHandler}
          class="select"
        /> */}
      </table>

      <CustomerProfile id={customerId} />
      {console.log("this number is wrong")}
    </div>
  );
};

export default SearchResults;
