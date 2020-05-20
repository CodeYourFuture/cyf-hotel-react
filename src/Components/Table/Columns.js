import React from "react";

const Columns = props => {
  return (
    <thead className="thead-dark">
      <tr>
        {Object.keys(props.fakeDataCol).map((propriety, index) => {
          const colName = propriety;
          return (
            <th scope="col" key={index}>
              {colName.charAt(0).toUpperCase() + colName.slice(1)}
            </th>
          );
        })}
        <th>Booking days</th>
      </tr>
    </thead>
  );
};

export default Columns;
