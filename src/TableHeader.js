import React from "react";
const tableTitle = [
  "#",
  "ID",
  "Title",
  "First Name",
  "Surname",
  "Email",
  "Room ID",
  "Check In Date",
  "Check Out Date",
  "Number Of Nights"
];

function TableHeader() {
  return (
    <thead>
      <tr>
        {tableTitle.map(item => {
          return <th scope="col">{item}</th>;
        })}
      </tr>
    </thead>
  );
}

export default TableHeader;
