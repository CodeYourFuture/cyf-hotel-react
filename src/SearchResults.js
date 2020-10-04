import React from "react";
import Row from "./Row";

const SearchResults = prop => {
  return (
    <div class="table-responsive" style={{ fontSize: "14px" }}>
      <table class="table table-striped table-light table-bordered table-hover table-sm">
        <caption>List of users</caption>
        <thead class="thead-light">
          <th scope="col">#</th>
          <th scop="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">SurNAme</th>
          <th scope="col">Email</th>
          <th scope="col">RoomID</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out Date</th>
          <th scope="col">stay</th>
          <th scope="col">select</th>
        </thead>
        <tbody>
          {prop.people.map(function(obj) {
            return <Row props={obj} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default SearchResults;
