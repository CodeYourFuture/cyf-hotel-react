import React, { useState } from "react";
import moment from "moment";
import Row from "./Row";
import "./App.css";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [profileId, setProfileId] = useState(null);
  const [className, setClassName] = useState("customer-profile");
  const showProfile = id => {
    setProfileId(id);
  };
  return (
    <div>
      <table className="table">
        <thead className="table-head">
          <tr>
            <td>id</td>
            <td>title</td>
            <td>firstname</td>
            <td>surname</td>
            <td>email</td>
            <td>roomId</td>
            <td>checkInDate</td>
            <td>checkOutDate</td>
            <td>nights</td>
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
