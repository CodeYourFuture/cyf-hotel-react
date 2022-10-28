import React from "react";

const Tableprops = props => {
  return (
    <div>
      <table>
        <tr>
          <th>School name</th>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check in date</th>
          <th>Check out date</th>
        </tr>
        <tr>
          <td>{props.school}</td>
          <td>{props.id}</td>
          <td>{props.title}</td>
          <td>{props.name}</td>
          <td>{props.email}</td>
          <td>{props.room}</td>
          <td>{props.checkIn}</td>
          <td>{props.checkOut}</td>
        </tr>
      </table>
    </div>
  );
};

export default Tableprops;
