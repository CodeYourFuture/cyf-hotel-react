import React from "react";

function Columns(props) {
  return (
    <thead>
      <tr>
        {Object.keys(props.fakeDataCol).map((propiety, index) => {
          let colName = propiety;
          return (
            <th scope="col" key={index}>
              {colName.charAt(0).toUpperCase() + colName.slice(1)}
            </th>
          );
        })}
        <th>Booking length</th>
      </tr>
    </thead>
  );
}

export default Columns;
