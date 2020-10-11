import React from "react";

const TableHead = () => {
  return (
    <thead className="table-danger">
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>FirstName</th>
        <th>Surname</th>
        <th>Email</th>
        <th>RoomID</th>
        <th>CheckIn</th>
        <th>CheckOut</th>
        <th>Nights</th>
        <th />
      </tr>
    </thead>
  );
};

export default TableHead;
