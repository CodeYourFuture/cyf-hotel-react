import React from "react";
import fakeData from "../../data/fakeBookings.json";

function formatHeaders(dataColumns) {
  return Object.keys(dataColumns).map((propriety, index) => {
    const colName = propriety;
    return (
      <th scope="col" key={index}>
        {colName.charAt(0).toUpperCase() + colName.slice(1)}
      </th>
    );
  });
}

const Columns = props => {
  return (
    <thead className="thead-dark">
      <tr>
        {formatHeaders(fakeData)}
        <th>Booking days</th>
        <th>Profile</th>
      </tr>
    </thead>
  );
};

export default Columns;
