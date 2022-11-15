import React from "react";

const customers = [
  {
    title: "Mr",
    firstName: "Person1",
    lastName: "Else",
    email: `person1@else.com`,
    roomID: "101",
    chkIn: "03-03-2022",
    chkOut: "04-03-2022"
  },

  {
    title: "Mrs",
    firstName: "Person2",
    lastName: "Else",
    email: `person2@else.com`,
    roomID: "102",
    chkIn: "03-03-2022",
    chkOut: "04-03-2022"
  },
  {
    title: "Mr",
    firstName: "Person3",
    lastName: "Else",
    email: `person3@else.com`,
    roomID: "103",
    chkIn: "03-03-2022",
    chkOut: "04-03-2022"
  },
  {
    title: "Mrs",
    firstName: "Person4",
    lastName: "Else",
    email: `person4@else.com`,
    roomID: "104",
    chkIn: "03-03-2022",
    chkOut: "04-03-2022"
  },
  {
    title: "Mr",
    firstName: "Person5",
    lastName: "Else",
    email: `person5@else.com`,
    roomID: "105",
    chkIn: "03-03-2022",
    chkOut: "04-03-2022"
  }
];

const CustomerList = () => {
  return (
    <div id="customer-data">
      <div>
        <span id="result">Results ({customers.length} found)</span>
        <table>
          <tr>
            <th>Title</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check In</th>
            <th>Check Out</th>
          </tr>
          {customers.map((x, i) => {
            return (
              <tr>
                <td key={i}>{x.title}</td>
                <td key={i}>{x.firstName}</td>
                <td key={i}>{x.lastName}</td>
                <td key={i}>{x.email}</td>
                <td key={i}>{x.roomID}</td>
                <td key={i}>{x.chkIn}</td>
                <td key={i}>{x.chkOut}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
