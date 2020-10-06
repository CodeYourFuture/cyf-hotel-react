import React from "react";

const TableHead = ({ bookingsList }) => {
  const columnTitles = Object.keys(bookingsList[0]);

  return (
    <thead className="table-danger">
      <tr>
        {columnTitles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}

        <th>Nights</th>
        <th />
      </tr>
    </thead>
  );
};

export default TableHead;
