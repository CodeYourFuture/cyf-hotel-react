import React from "react";
import Table from "./Table";

const SearchResults = props => {
  return (
    <table className="table">
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
          <th scope="col">Show Profile</th>
        </tr>
      </thead>

      {props.results.map((data, index) => {
        return <Table data={data} key={index} />;
      })}
    </table>
  );
};

//   var a = moment(x.checkInDate);
//   var b = moment(x.checkOutDate);
//   b.diff(a, "days"); // 1

export default SearchResults;
