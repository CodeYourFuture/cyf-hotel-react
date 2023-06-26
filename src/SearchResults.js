// import TableHead from "./TableHead.js";
// import TableInfo from "./TableInfo.js";
// const SearchResults = (props) => {
//     return (
//     <table className="table">
//         <TableHead />
//         <TableInfo results={props.results} />
//     </table>
//     );
// };
// export default SearchResults;

import React from "react";
import Table from "react-bootstrap/Table";
import SearchResultsRow from "./SearchResultsRow.jsx";

function SearchResults(props) {
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room Id</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Booking Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(dt => {
            return <SearchResultsRow dt={dt} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default SearchResults;