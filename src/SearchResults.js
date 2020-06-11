import React, { useState, useEffect } from "react";
import CustomerProfile from "./CustomerProfile";
import "./css/Footer.css";
// import FakeBookingData from "./data/fakeBookings.json";
import BookingRow from "./BookingRow";
import "./SearchResults.css";

const SearchResults = props => {
  const [showProfileId, setShowProfileId] = useState(-1);
  const [customerData, setCustomerData] = useState([]);

  function handleShowProfile(id) {
    setShowProfileId(id);
  }

  useEffect(() => {
    if (showProfileId !== -1) {
      fetch(`https://cyf-react.illicitonion.com/customers/${showProfileId}`)
        .then(res => res.json())
        .then(data => setCustomerData(data));
    }
  }, [showProfileId]);

  return (
    <div className="row">
      <div className="col-12">
        {showProfileId !== -1 && (
          <CustomerProfile
            customer={customerData}
            onClose={() => setShowProfileId(-1)}
          />
        )}

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
              <th scope="col">Profile</th>
            </tr>
          </thead>
          <tbody>
            {props.bookingsData.map((booking, index) => {
              return (
                <BookingRow
                  key={booking.id}
                  booking={booking}
                  handleShowProfile={handleShowProfile}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchResults;
