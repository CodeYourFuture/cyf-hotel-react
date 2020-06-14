import React, { useState } from "react";
import moment from "moment";
import Row from "./Row";
import "./App.css";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [profileId, setProfileId] = useState(null);
  const [className, setClassName] = useState("customer-profile lg-col-5");
  const showProfile = id => {
    setProfileId(id);
  };
  return (
    <div className="lg-col-12 col-12">
      <table className="table lg-col-12 col-12">
        <thead className="table-head lg-col-11 col-11">
          <tr>
            <td onClick={props.sortById} className="head-column">
              Id
            </td>
            <td onClick={props.sortByTitle} className="head-column">
              Title
            </td>
            <td onClick={props.sortByFirstName} className="head-column">
              FirstName
            </td>
            <td onClick={props.sortBySurname} className="head-column">
              Surname
            </td>
            <td onClick={props.sortByEmail} className="head-column">
              Email
            </td>
            <td onClick={props.sortByRoomId} className="head-column">
              RoomId
            </td>
            <td onClick={props.sortByCheckInDate} className="head-column">
              CheckInDate
            </td>
            <td onClick={props.sortByCheckOutDate} className="head-column">
              CheckOutDate
            </td>
            <td onClick={props.sortByNights}>Nights</td>
            <td>buttons</td>
          </tr>
        </thead>
        {props.results.map(result => {
          return (
            <Row
              row={result}
              key={result.id}
              row1={getDuration(result.checkOutDate, result.checkInDate)}
              isSelected={result.id === selectedRow}
              setSelectedRow={setSelectedRow}
              showProfile={showProfile}
              setClassName={setClassName}
            />
          );
        })}
      </table>
      <CustomerProfile profileId={profileId} className={className} />
    </div>
  );
};

function getDuration(start, end) {
  let duration = moment.duration(moment(start).diff(moment(end)));
  let days = duration.asDays();
  return Math.round(days);
}

export default SearchResults;
