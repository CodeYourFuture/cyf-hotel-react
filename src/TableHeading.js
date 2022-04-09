import React from "react";

const TableHeading = () => {
  const tableHeadings = [
    "id",
    "Title",
    "First name",
    "Surname",
    "Email",
    "Room id",
    "Check in date",
    "Check out date",
    "Number of nights",
    "Profile"
  ];
  return (
    <thead>
      <tr>
        {tableHeadings.map((heading, index) => (
          <th key={index} scope="col">
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeading;
