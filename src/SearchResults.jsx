import React, { useState } from "react";
import CustomerData from "./CustomerData";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

function SearchResults(props) {
  // You need to record the selected customer id after clicking on a "Show profile" button.
  const results = props.results;
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  function displayProfile(id) {
    setSelectedCustomerId(id);
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Room ID</th>
            <th>Check in date</th>
            <th>Check out date</th>
            <th>Number of Nights</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {results.map(result => {
            return (
              <CustomerData
                key={result.id}
                id={result.id}
                title={result.title}
                firstName={result.firstName}
                surname={result.surname}
                email={result.email}
                phone={result.phone}
                roomId={result.roomId}
                checkInDate={result.checkInDate}
                checkOutDate={result.checkOutDate}
                nights={moment(result.checkOutDate).diff(
                  moment(result.checkInDate),
                  "days"
                )}
                onClick={displayProfile}
              />
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="9" />
          </tr>
        </tfoot>
      </table>
      {selectedCustomerId && (
        <CustomerProfile id={selectedCustomerId} onClick={displayProfile} />
      )}
    </div>
  );
}
export default SearchResults;
