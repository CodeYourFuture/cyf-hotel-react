import React from "react";

const diffInDays = (a, b) => {
  const date1 = new Date(a);
  const date2 = new Date(b);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const SearchResults = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email address</th>
          <th scope="col">Room #</th>
          <th scope="col">Check-in date</th>
          <th scope="col">Check-out date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((el, index) => (
          <tr key={index}>
            <th scope="row">{el.id}</th>
            <td>{el.title}</td>
            <td>{el.firstName}</td>
            <td>{el.surname}</td>
            <td>{el.email}</td>
            <td>{el.roomId}</td>
            <td>{el.checkInDate}</td>
            <td>{el.checkOutDate}</td>
            <td>{diffInDays(el.checkOutDate, el.checkInDate)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
