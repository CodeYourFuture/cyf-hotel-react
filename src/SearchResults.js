import React from "react";
import IndividualBooking from "./IndividualBooking";
// import IndividualBooking from "./IndividualBooking";

const SearchResults = ({ data }) => {
  console.log(data);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Total number of nights</th>
          </tr>
        </thead>
        <tbody>
          <IndividualBooking item={data[0]} />
          <IndividualBooking item={data[1]} />
          <IndividualBooking item={data[2]} />
          <IndividualBooking item={data[3]} />
          <IndividualBooking item={data[4]} />
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
