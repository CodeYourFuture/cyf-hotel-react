import React from "react";
import Table from "./Table";

const SearchResults = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out Date</th>
          <th scope="col">Number Of Nights</th>
        </tr>
      </thead>

      {props.results.map(data => {
        return <Table data={data} />;
      })}
    </table>
  );
};

//   var a = moment(x.checkInDate);
//   var b = moment(x.checkOutDate);
//   b.diff(a, "days"); // 1

export default SearchResults;
