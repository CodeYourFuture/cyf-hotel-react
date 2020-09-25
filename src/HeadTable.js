import React from "react";

const HeadTable = () => {
  const heading = [
    "id",
    "title",
    "first name",
    "surname",
    "email",
    "room id",
    "check in date",
    "check out date",
    "number of night"
  ];
  return (
    <thead>
      <tr>
        {heading.map(trValue => (
          <th scope="col">{trValue}</th>
        ))}
      </tr>
    </thead>
  );
};

export default HeadTable;
