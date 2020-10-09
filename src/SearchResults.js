import React from "react";
import CustomerProfile from "./CustomerProfile";
import IndividualBooking from "./IndividualBooking";
// import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ data, getId, id }) => {
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
            <th scope="col">Customer Profile</th>
          </tr>
        </thead>
        <tbody>
          {data.map(person => (
            <IndividualBooking getId={getId} item={person} />
          ))}
        </tbody>
      </table>
      {id && <CustomerProfile id={id} />}
    </div>
  );
};

export default SearchResults;
