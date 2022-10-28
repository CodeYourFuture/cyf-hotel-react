import React from "react";

const Tableprops = props => {
  return (
    <div>
      <table id="customers">
        <tr>
          <td>{props.school}</td>
          <td>{props.id}</td>
          <td>{props.title}</td>
          <td>{props.name}</td>
          <td>{props.surname}</td>
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
