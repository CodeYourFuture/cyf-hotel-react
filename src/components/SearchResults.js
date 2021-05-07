import React, { useState } from "react";
import moment from "moment";
import Row from "./Row";
import "../App.css";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ sortBy, results }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [profileId, setProfileId] = useState("");
  const [customerData, setCustomerData] = useState({});

  const showProfile = id => {
    setProfileId(id);
    fetch(`https://cyf-nader-hotel-server.herokuapp.com/bookings/${id}`)
      .then(res => res.json())
      .then(data => setCustomerData(data));
  };

  return (
    <div className="lg-col-12 col-12">
      <table className="table lg-col-12 col-12">
        <thead className="table-head lg-col-11 col-11">
          <tr>
            <td onClick={() => sortBy("title")} className="head-column">
              Title
            </td>
            <td onClick={() => sortBy("firstName")} className="head-column">
              FirstName
            </td>
            <td onClick={() => sortBy("surname")} className="head-column">
              Surname
            </td>
            <td onClick={() => sortBy("email")} className="head-column">
              Email
            </td>
            <td onClick={() => sortBy("roomId")} className="head-column">
              RoomId
            </td>
            <td onClick={() => sortBy("checkInDate")} className="head-column">
              CheckInDate
            </td>
            <td onClick={() => sortBy("checkOutDate")} className="head-column">
              CheckOutDate
            </td>
            <td>Nights</td>
            <td>buttons</td>
          </tr>
        </thead>
        {results.map(result => {
          return (
            <Row
              row={result}
              key={result._id}
              getDuration={getDuration}
              isSelected={result._id === selectedRow}
              setSelectedRow={setSelectedRow}
              showProfile={showProfile}
            />
          );
        })}
      </table>
      {profileId && (
        <CustomerProfile profileId={profileId} customerData={customerData} />
      )}
    </div>
  );
};

function getDuration(start, end) {
  let duration = moment.duration(moment(start).diff(moment(end)));
  let days = duration.asDays();
  return Math.round(days);
}

export default SearchResults;
