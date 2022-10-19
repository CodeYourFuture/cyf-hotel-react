import React from "react";
// import FakeBookings from "./FakeBookings";
import FakeBookings from "./data/fakeBookings.json";

const SearchResults = props => {
  //   let [
  //     id,
  //     title,
  //     firstName,
  //     surname,
  //     email,
  //     roomId,
  //     checkInDate,
  //     checkOutDate,
  //   ] = FakeBookings;

  return (
    // <ul>
    //   {props.results.map((el, index) => (
    //     <li key={index}>{el}</li>
    //   ))}
    //   <ul>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          {/* {props[key].map((el, index) => (
            <th key={index} scope="col">
              {el.id}
            </th>
            <th key={index} scope="col">
              {el.title}
            </th>
          ))} */}
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* {props.values.map((el, index) => (
            <td key={index} scope="row">
              {el}
            </td>
          ))} */}
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
