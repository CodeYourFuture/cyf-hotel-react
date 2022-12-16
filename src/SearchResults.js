import React from "react";

// import CustomerProfile from "./CustomerProfile";
import CreateTableRow from "./Tablerow";

function SearchResults({ results, showProfile }) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered align-top">
        <thead className="table-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">SurName</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col"> Number of Nights </th>
            <th scope="col"> Profile </th>
          </tr>
        </thead>
        <tbody>
          {results.map((profile, index) => (
            <CreateTableRow
              profile={profile}
              key={index}
              showProfile={showProfile}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
