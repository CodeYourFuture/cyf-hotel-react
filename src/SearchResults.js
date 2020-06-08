import React from "react";
import "./css/Footer.css";
// import FakeBookingData from "./data/fakeBookings.json";
import BookingRow from "./BookingRow";
import "./SearchResults.css";

const SearchResults = props => {
  return (
    <div className="row">
      <div className="col-12">
        <table className="table table-hover table-responsive-sm table-responsive-xs">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col">Room Id</th>
              <th scope="col">Check-in</th>
              <th scope="col">Check-out</th>
              <th scope="col">Duration</th>
            </tr>
          </thead>
          <tbody>
            {props.bookingsData.map((booking, index) => {
              return <BookingRow key={booking.id} booking={booking} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchResults;
