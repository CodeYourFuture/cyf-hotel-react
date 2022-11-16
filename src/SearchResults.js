import React from "react";

const CustomerList = customers => {
  return (
    <div className="table-responsive">
      <caption id="result">Results ({customers.results.length} found)</caption>
      <table class="table">
        <tr>
          <th>Title</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check In</th>
          <th>Check Out</th>
        </tr>
        {customers.results.map((x, i) => {
          return (
            <tr>
              <td key={i}>{x.title}</td>
              <td key={i}>{x.firstName}</td>
              <td key={i}>{x.surname}</td>
              <td key={i}>{x.email}</td>
              <td key={i}>{x.roomId}</td>
              <td key={i}>{x.checkInDate}</td>
              <td key={i}>{x.checkOutDate}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default CustomerList;
