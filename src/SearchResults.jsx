import React from "react";

const SearchResults = props => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">I.D.</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room I.D.</th>
            <th scope="col">Check-In Date</th>
            <th scope="col">Check-Out Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">#1534</th>
            <th scope="row">Ms.</th>
            <th scope="row">Tilda</th>
            <th scope="row">Swinton</th>
            <th scope="row">tilda.swinton@thespian.com</th>
            <th scope="row">10</th>
            <th scope="row">15.11.22</th>
            <th scope="row">16.11.22</th>
            {/* {props.fakeBookings.map((booking) => (
               <td scope="row">{booking}</td> 
            ))}; */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
